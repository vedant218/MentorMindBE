
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
        <CardDescription>View your preferences.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="font-medium">Region</Label>
              <div>Asia</div>
            </div>
            <div>
              <Label className="font-medium">Language</Label>
              <div>English</div>
            </div>
            <div>
              <Label className="font-medium">Mode</Label>
              <div>Dark</div>
            </div>
            <div>
              <Label className="font-medium">Subjects</Label>
              <div>Mathematics, Science</div>
            </div>
            <div>
              <Label className="font-medium">Preferred Days</Label>
              <div>Monday, Wednesday, Friday</div>
            </div>
            <div>
              <Label className="font-medium">Preferred Time</Label>
              <div>10am - 12pm</div>
            </div>
            <div className="col-span-2">
              <Label className="font-medium">Similarity Score</Label>
              <div>92%</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}