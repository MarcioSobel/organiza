"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TesteGraf } from "./viewsTest";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const CardGraph = () => {
    const [isFocused, setIsFocused] = useState(false);

    const focusCard = () => {
        setIsFocused((prev) => !prev);
    };

    return (
        <Card
            className={cn(
                "bg-off-white border-off-black border-2",
                `${isFocused ? "sm:w-[60%]" : "sm:w-[20%]"} 
                w-full transition-[width] duration-500`
                
            )}
            style={{ boxShadow: "2px 2px #2C2C2C" }}
            onClick={focusCard}
            
        >
            <CardHeader>
                <p>graph</p>
            </CardHeader>

            <CardContent>{isFocused && <TesteGraf />}</CardContent>
        </Card>
    );
};