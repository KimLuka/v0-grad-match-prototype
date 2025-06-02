import { LabInfo } from '@/types/lab-info'

export default function BenefitsSection({ recruitment }: { recruitment: LabInfo }) {
  return (
    <>
      <h3 className="mt-4 font-medium">장학금 및 혜택</h3>
      <ul className="space-y-2">
        {recruitment.conditions.salary && (
          <li className="flex items-center">
            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-muted-foreground">{recruitment.conditions.salary}</span>
          </li>
        )}
        {recruitment.conditions.otherBenefits?.map((benefit, index) => (
          <li key={index} className="flex items-center">
            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-muted-foreground">{benefit}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
