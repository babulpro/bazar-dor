"use client";

import { signOut } from "@/lib/auth-client";
import { Button } from "@heroui/react";
 

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans  bg-transparent">
       <h1>welcome to my app</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, expedita. Necessitatibus ratione ipsam excepturi expedita quod? Debitis voluptatum eligendi alias excepturi eum nihil magni nulla voluptatem quam molestiae, dignissimos nostrum?</p>
    </div>
  );
}
