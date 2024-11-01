// app/page.tsx
"use client";

import Image from "next/image";
import ExpenseDashboard from "@/components/dashboard/page";
import ChanelLogo from "@/public/chanel.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* Black header bar */}
      <div className="w-full bg-black h-25 flex-row justify-between gap-10 flex items-center px-5">
        <Image
          src={ChanelLogo}
          alt="Chanel Logo"
          className="object-contain"
          priority
          width={100}
          height={100}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button className="overflow-hidden h-32 p-0 bg-black">
            <Image
              src={
                "https://ok4static.oktacdn.com/fs/bco/1/fs012r07i1rX4ZtdW1t8"
              }
              alt="Coupa Logo"
              className="object-contain"
              priority
              width={160}
              height={50}
              style={{
                padding: "10px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            />
          </Button>
        </div>
      </div>
      <ExpenseDashboard />
    </div>
  );
}
