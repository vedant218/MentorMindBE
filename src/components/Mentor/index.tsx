import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputForm } from "../InputForm";

// run FlaSk Server before implementing
// const config = {
//   method: 'post',
//   url: 'http://127.0.0.1:5000/api',
//   headers: {
//     ...formData.getHeaders()
//   },
//   data: formData
// };

// axios(config)
//   .then((response) => {
//     setResponseData(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <InputForm/>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
