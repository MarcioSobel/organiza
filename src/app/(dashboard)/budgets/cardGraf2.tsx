"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TesteGraf } from "./viewsTest";
import { createRef, useState } from "react";
import { InputBar } from "@/components/input-bar";
import { useForm } from "react-hook-form";

export const CardGraph = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [graphTitle, setGraphTitle] = useState("");

    const focusCard = () => {
        setIsFocused((prev) => !prev);
    };

    const ref = createRef<HTMLInputElement>();
    const { register, handleSubmit } = useForm<{ name: string }>();

    const updateText = ({ name }: { name: string }) => {
        setGraphTitle(name);
        setIsTyping(false);
    };

    return (
        <Card
            className={`bg-off-white border-off-black border-2 ${
                isFocused || isTyping ? "sm:w-[60%]" : "sm:w-[20%]"
            } w-full transition-[width] duration-500`}
            style={{ boxShadow: "2px 2px #2C2C2C" }}
            onClick={focusCard}
        >
            <CardHeader>
                {isTyping && (
                    <p
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsTyping(true);
                        }}
                    >
                        {graphTitle || "gráfico"}
                    </p>
                )}
                {isTyping && (
                    <form onSubmit={handleSubmit(updateText)}>
                        <InputBar
                            label="Nome do orçamento"
                            register={register("name")}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </form>
                )}
            </CardHeader>

            <CardContent>{isFocused || isTyping && <TesteGraf />}</CardContent>
        </Card>
    );
};