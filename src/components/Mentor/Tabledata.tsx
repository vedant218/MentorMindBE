import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    mentorName: "Komalika Acharya",
    Region: "Goa",
    Languages: "Santali",
    PreferredTime: "Morning, Afternoon, Evening",
    PreferredDay: "Tuesday",
    subjects: "Physics",
    Mode: "doubt solving",
    similarityScore: "0.9999063717768877",
  },
  {
    mentorName: "Female Titan",
    Region: "Goa",
    Languages: "Santali",
    PreferredTime: "Morning, Afternoon, Evening, Night",
    PreferredDay: "Tuesday",
    subjects: "Physics",
    Mode: "doubt solving",
    similarityScore: "0.7196418941020966",
  },
  {
    mentorName: "Nezuko Kamado",
    Region: "Goa",
    Languages: "Santali",
    PreferredTime: "Afternoon, Evening",
    PreferredDay: "Tuesday",
    subjects: "Physics",
    Mode: "doubt solving",
    similarityScore: "0.7167949676513672",
  },
  {
    mentorName: "Shinobu Kocho",
    Region: "Goa",
    Languages: "Santali",
    PreferredTime: "Morning, Evening, Night",
    PreferredDay: "Tuesday",
    subjects: "Physics",
    Mode: "doubt solving",
    similarityScore: "0.5374325811862946",
  },
  {
    mentorName: "Grand Zenos",
    Region: "Goa",
    Languages: "Santali",
    PreferredTime: "Morning, Evening, Night",
    PreferredDay: "Tuesday",
    subjects: "Physics",
    Mode: "doubt solving",
    similarityScore: "0.5374325811862946",
  },
];

export function Tabledata() {
  return (
    <Table>
      <TableCaption>A list of your personalized mentors.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Mentor Name</TableHead>
          <TableHead className="">Region</TableHead>
          <TableHead className="">Languages</TableHead>
          <TableHead className="">Preferred Time</TableHead>
          <TableHead className="">Preferred Date</TableHead>
          <TableHead>subjects</TableHead>
          <TableHead>Mode</TableHead>
          <TableHead className="text-right">similarity score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.mentorName}>
            <TableCell className="font-medium">{invoice.mentorName}</TableCell>
            <TableCell>{invoice.Region}</TableCell>
            <TableCell>{invoice.Languages}</TableCell>
            <TableCell>{invoice.PreferredTime}</TableCell>
            <TableCell>{invoice.PreferredDay}</TableCell>
            <TableCell>{invoice.subjects}</TableCell>
            <TableCell>{invoice.Mode}</TableCell>
            <TableCell className="text-right">
              {invoice.similarityScore}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
