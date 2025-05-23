export function TrustBadges() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <h3 className="text-center text-xl font-medium">Trusted by leading Korean universities</h3>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        <UniversityLogo name="Seoul National University" />
        <UniversityLogo name="KAIST" />
        <UniversityLogo name="Yonsei University" />
        <UniversityLogo name="Korea University" />
        <UniversityLogo name="POSTECH" />
        <UniversityLogo name="Hanyang University" />
      </div>
      <div className="mt-8 flex flex-col items-center justify-center space-y-2">
        <p className="text-2xl font-bold">10,000+</p>
        <p className="text-muted-foreground">International students connected</p>
      </div>
    </div>
  )
}

function UniversityLogo({ name }: { name: string }) {
  return (
    <div className="flex h-16 w-32 items-center justify-center rounded-md bg-muted/30">
      <span className="text-sm font-medium text-muted-foreground">{name}</span>
    </div>
  )
}
