import { LabInfo } from '@/types/lab-info'

export default function RequirementsSection({ recruitment }: { recruitment: LabInfo }) {
  return (
    <>
      <h3 className="mt-4 font-medium">연구 분야</h3>
      <div className="space-y-4">
        <ul className="space-y-2">
          {recruitment.fieldOfStudy.map((field, index) => (
            <li key={index} className="flex items-center">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">{field}</span>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="mt-4 font-medium">자격 요건</h3>
      <ul className="space-y-2">
        {recruitment.requirements.map((requirement, index) => (
          <li key={index} className="flex items-center">
            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-muted-foreground">{requirement}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
