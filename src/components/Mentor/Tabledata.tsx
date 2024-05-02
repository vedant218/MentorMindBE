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
    paymentStatus: "INV001",
    mentorName: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    paymentStatus: "INV002",
    mentorName: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    mentorName: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    mentorName: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    mentorName: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    mentorName: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    mentorName: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
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
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.mentorName}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
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
