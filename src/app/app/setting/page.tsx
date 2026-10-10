"use client";

import { updateUser } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";

export default function SettingPae() {
  const onSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data =Object.fromEntries(formData.entries());
      await updateUser({
        name:data.name as string, 
    })
    

    

    
  
  };

  return (
    <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
       
      <TextField
        isRequired
        minLength={8}
        name="name"
        type="text"
        validate={(value) => {
          if (value.length < 2) {
            return "Name must be at least 2 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Name must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Name must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Name</Label>
        <Input placeholder="Enter your name" />
        <Description>Must be at least 2 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button  type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
}