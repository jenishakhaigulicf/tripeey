"use client";
import { InputWithLabel } from "@/components/input";
import AppModal from "@/components/modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { ProgressIndicator } from "@radix-ui/react-progress";
import { useState } from "react";

export default function AppSidebar() {
  const [step, setStep] = useState(0); // step from 0 to 3

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const trigger = <Button>Create New Trip</Button>;
  return (
    <div className="flex justify-end m-5">
      <AppModal
        trigger={trigger}
        title={"Create New Trip"}
        description={"Design your unique travel experience with us."}
      >
        <div>
          {/* Progress Bars */}
          <div className="flex gap-2 mb-5">
            {[0, 1, 2, 3].map((i) => (
              <Progress
                key={i}
                value={step === i ? 100 : 0}
                className=" [&>div]:bg-[#654597]"
              ></Progress>
            ))}
          </div>

          {/* Step Badge */}
          <Badge
            variant="secondary"
            className="text-white bg-[#18181B] rounded-full mb-2"
          >
            {step + 1}/4
          </Badge>

          {/* Step Content */}
          <p className="mb-4">
            <p className="text-base font-semibold">Trip Overview</p>
            <p className="text-sm text-[#71717A]">
              Start by giving brief overview of your trip.
            </p>
          </p>
          <div className="flex flex-col gap-6">
            <div>
              <Separator />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputWithLabel
                label="Destination"
                placeholder="Select or Search Destination"
              />
              <InputWithLabel label="Number of People" placeholder="" />
              <InputWithLabel label="From" placeholder="DD-MM-YYYY" />
              <InputWithLabel label="To" placeholder="DD-MM-YYYY" />
            </div>

            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">Flexible Dates</p>
              <Switch></Switch>
            </div>

            {/* Navigation */}
            <div className="flex justify-end gap-4">
              <Button onClick={prevStep} variant={"outline"}>
                Back
              </Button>
              <Button onClick={nextStep} className="bg-[#654597]">
                Next
              </Button>
            </div>
          </div>
        </div>
      </AppModal>
    </div>
  );
}
