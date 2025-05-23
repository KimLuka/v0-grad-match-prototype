'use client'

import { useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function ApplicantFilters() {
  const [selectedNationalities, setSelectedNationalities] = useState<string[]>([])
  const [selectedDegrees, setSelectedDegrees] = useState<string[]>([])

  const handleNationalityChange = (nationality: string) => {
    setSelectedNationalities(prev =>
      prev.includes(nationality) ? prev.filter(n => n !== nationality) : [...prev, nationality]
    )
  }

  const handleDegreeChange = (degree: string) => {
    setSelectedDegrees(prev =>
      prev.includes(degree) ? prev.filter(d => d !== degree) : [...prev, degree]
    )
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="desired-degree">Desired Degree</Label>
          <Select>
            <SelectTrigger id="desired-degree">
              <SelectValue placeholder="Select degree" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Degrees</SelectItem>
              <SelectItem value="masters">Master's</SelectItem>
              <SelectItem value="phd">Ph.D.</SelectItem>
              <SelectItem value="integrated">Integrated (Master's + Ph.D.)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="topik-level">TOPIK Level</Label>
          <Select>
            <SelectTrigger id="topik-level">
              <SelectValue placeholder="Select TOPIK level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="1">Level 1</SelectItem>
              <SelectItem value="2">Level 2</SelectItem>
              <SelectItem value="3">Level 3</SelectItem>
              <SelectItem value="4">Level 4</SelectItem>
              <SelectItem value="5">Level 5</SelectItem>
              <SelectItem value="6">Level 6</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="nationality">
            <AccordionTrigger className="text-sm font-medium">Nationality</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="usa"
                    checked={selectedNationalities.includes('usa')}
                    onCheckedChange={() => handleNationalityChange('usa')}
                  />
                  <Label htmlFor="usa" className="text-sm font-normal">
                    United States
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="china"
                    checked={selectedNationalities.includes('china')}
                    onCheckedChange={() => handleNationalityChange('china')}
                  />
                  <Label htmlFor="china" className="text-sm font-normal">
                    China
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="india"
                    checked={selectedNationalities.includes('india')}
                    onCheckedChange={() => handleNationalityChange('india')}
                  />
                  <Label htmlFor="india" className="text-sm font-normal">
                    India
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="japan"
                    checked={selectedNationalities.includes('japan')}
                    onCheckedChange={() => handleNationalityChange('japan')}
                  />
                  <Label htmlFor="japan" className="text-sm font-normal">
                    Japan
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="vietnam"
                    checked={selectedNationalities.includes('vietnam')}
                    onCheckedChange={() => handleNationalityChange('vietnam')}
                  />
                  <Label htmlFor="vietnam" className="text-sm font-normal">
                    Vietnam
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="fields">
            <AccordionTrigger className="text-sm font-medium">Research Field</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="engineering"
                    checked={selectedDegrees.includes('engineering')}
                    onCheckedChange={() => handleDegreeChange('engineering')}
                  />
                  <Label htmlFor="engineering" className="text-sm font-normal">
                    Engineering
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="natural-sciences"
                    checked={selectedDegrees.includes('natural-sciences')}
                    onCheckedChange={() => handleDegreeChange('natural-sciences')}
                  />
                  <Label htmlFor="natural-sciences" className="text-sm font-normal">
                    Natural Sciences
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="social-sciences"
                    checked={selectedDegrees.includes('social-sciences')}
                    onCheckedChange={() => handleDegreeChange('social-sciences')}
                  />
                  <Label htmlFor="social-sciences" className="text-sm font-normal">
                    Social Sciences
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="business"
                    checked={selectedDegrees.includes('business')}
                    onCheckedChange={() => handleDegreeChange('business')}
                  />
                  <Label htmlFor="business" className="text-sm font-normal">
                    Business
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="humanities"
                    checked={selectedDegrees.includes('humanities')}
                    onCheckedChange={() => handleDegreeChange('humanities')}
                  />
                  <Label htmlFor="humanities" className="text-sm font-normal">
                    Humanities
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="space-y-2">
          <Label htmlFor="st-alliance">ST Alliance</Label>
          <Select>
            <SelectTrigger id="st-alliance">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button>Apply Filters</Button>
        <Button variant="outline">Reset</Button>
      </div>
    </div>
  )
}
