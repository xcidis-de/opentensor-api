import { ApiLog } from '@/_store/api/types'
import { prisma } from '@/lib/database'

export function extractDate(timestamp: string) {
  return timestamp.split('T')[0]
}

export function countRequestsPerDay(logs: ApiLog[]): Record<string, number> {
  const counts: Record<string, number> = {}

  logs.forEach((log) => {
    if (+log.status === 200) {
      const date = log.created_at.split('T')[0]
      if (!counts[date]) {
        counts[date] = 0
      }
      counts[date]++
    }
  })

  return counts // Output: { '2024-06-09': 2, '2024-06-10': 1 }
}

export function countRequestsToday(logs: ApiLog[], today: string) {
  return logs.reduce((count, log) => {
    if (+log.status === 200 && extractDate(log.created_at) === today) {
      count += 1
    }
    return count
  }, 0)
}

export function totalRequests(logs: ApiLog[]) {
  return logs.filter((log) => +log.status === 200).length
}

export function getTodayDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0') // Months are zero-indexed
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

type StripePlan = {
  plans: {
    active: boolean
    aggregate_usage: string | null
    amount: number
    amount_decimal: string
    billing_scheme: string
    created: number
    currency: string
    id: string
    interval: string
    interval_count: number
    livemode: boolean
    metadata: Record<string, string>
    meter: string | null
    nickname: string | null
    object: string
    product: string
    tiers_mode: string | null
    transform_usage: string | null
    trial_period_days: number | null
    usage_type: string
  }
}

export function findActivePlan(plansArray: StripePlan[]): string | boolean {
  let hasYear = false
  let hasMonth = false

  plansArray.forEach((planObj) => {
    const interval = planObj.plans.interval

    if (interval === 'year') {
      hasYear = true
    }
    if (interval === 'month') {
      hasMonth = true
    }
  })

  if (hasYear) {
    return 'year'
  } else if (hasMonth) {
    return 'month'
  } else {
    return false
  }
}

export async function getCusId(email: string) {
  const user = await prisma.user.findFirst({
    where: { email: String(email) }
  })
  return user?.stripe_customer_id
}