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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SearchFilters() {
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([])
  const [selectedFields, setSelectedFields] = useState<string[]>([])

  const handleUniversityChange = (university: string) => {
    setSelectedUniversities(prev =>
      prev.includes(university) ? prev.filter(u => u !== university) : [...prev, university]
    )
  }

  const handleFieldChange = (field: string) => {
    setSelectedFields(prev =>
      prev.includes(field) ? prev.filter(f => f !== field) : [...prev, field]
    )
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="degree-type">Degree Type</Label>
          <Select>
            <SelectTrigger id="degree-type">
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

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="universities">
            <AccordionTrigger className="text-sm font-medium">Universities</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="snu"
                    checked={selectedUniversities.includes('snu')}
                    onCheckedChange={() => handleUniversityChange('snu')}
                  />
                  <Label htmlFor="snu" className="text-sm font-normal">
                    Seoul National University
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="kaist"
                    checked={selectedUniversities.includes('kaist')}
                    onCheckedChange={() => handleUniversityChange('kaist')}
                  />
                  <Label htmlFor="kaist" className="text-sm font-normal">
                    KAIST
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="yonsei"
                    checked={selectedUniversities.includes('yonsei')}
                    onCheckedChange={() => handleUniversityChange('yonsei')}
                  />
                  <Label htmlFor="yonsei" className="text-sm font-normal">
                    Yonsei University
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="korea"
                    checked={selectedUniversities.includes('korea')}
                    onCheckedChange={() => handleUniversityChange('korea')}
                  />
                  <Label htmlFor="korea" className="text-sm font-normal">
                    Korea University
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="postech"
                    checked={selectedUniversities.includes('postech')}
                    onCheckedChange={() => handleUniversityChange('postech')}
                  />
                  <Label htmlFor="postech" className="text-sm font-normal">
                    POSTECH
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="fields">
            <AccordionTrigger className="text-sm font-medium">Field of Study</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="engineering"
                    checked={selectedFields.includes('engineering')}
                    onCheckedChange={() => handleFieldChange('engineering')}
                  />
                  <Label htmlFor="engineering" className="text-sm font-normal">
                    Engineering
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="natural-sciences"
                    checked={selectedFields.includes('natural-sciences')}
                    onCheckedChange={() => handleFieldChange('natural-sciences')}
                  />
                  <Label htmlFor="natural-sciences" className="text-sm font-normal">
                    Natural Sciences
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="social-sciences"
                    checked={selectedFields.includes('social-sciences')}
                    onCheckedChange={() => handleFieldChange('social-sciences')}
                  />
                  <Label htmlFor="social-sciences" className="text-sm font-normal">
                    Social Sciences
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="business"
                    checked={selectedFields.includes('business')}
                    onCheckedChange={() => handleFieldChange('business')}
                  />
                  <Label htmlFor="business" className="text-sm font-normal">
                    Business
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="humanities"
                    checked={selectedFields.includes('humanities')}
                    onCheckedChange={() => handleFieldChange('humanities')}
                  />
                  <Label htmlFor="humanities" className="text-sm font-normal">
                    Humanities
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="life-sciences"
                    checked={selectedFields.includes('life-sciences')}
                    onCheckedChange={() => handleFieldChange('life-sciences')}
                  />
                  <Label htmlFor="life-sciences" className="text-sm font-normal">
                    Life Sciences
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="space-y-2">
          <Label htmlFor="scholarship">Scholarship</Label>
          <Select>
            <SelectTrigger id="scholarship">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="full">Full Scholarship</SelectItem>
              <SelectItem value="partial">Partial Scholarship</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Application Deadline</Label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="from-date" className="sr-only">
                From
              </Label>
              <Input type="date" id="from-date" placeholder="From" />
            </div>
            <div>
              <Label htmlFor="to-date" className="sr-only">
                To
              </Label>
              <Input type="date" id="to-date" placeholder="To" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button>Apply Filters</Button>
        <Button variant="outline">Reset</Button>
      </div>
    </div>
  )
}
