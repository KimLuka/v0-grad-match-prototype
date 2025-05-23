export function TrustBadges() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <h3 className="text-xl font-medium text-center">Trusted by leading Korean universities</h3>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        <UniversityLogo name="Seoul National University" />
        <UniversityLogo name="KAIST" />
        <UniversityLogo name="Yonsei University" />
        <UniversityLogo name="Korea University" />
        <UniversityLogo name="POSTECH" />
        <UniversityLogo name="Hanyang University" />
      </div>
      <div className="flex flex-col items-center justify-center mt-8 space-y-2">
        <p className="text-2xl font-bold">10,000+</p>
        <p className="text-muted-foreground">International students connected</p>
      </div>
    </div>
  )
}

function UniversityLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center h-16 w-32 bg-muted/30 rounded-md">
      <span className="text-sm font-medium text-muted-foreground">{name}</span>
    </div>
  )
}
