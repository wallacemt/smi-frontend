import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
interface DateSelectorProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  setTime: (time: Date) => void;
}
export const DateSelector = ({ date, setDate, setTime }: DateSelectorProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex gap-4 text-white self-center">
      <div className="flex flex-col gap-3 ">
        <Label htmlFor="date-picker" className="px-1 ">
          Data
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" id="date-picker" className="w-32 justify-between font-normal">
              {date ? date.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="time-picker" className="px-1">
          Hora
        </Label>
        <Input
          type="time"
          id="time-picker"
          step="1"
          defaultValue="12:00:00"
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          onChange={(e) => {
            const [hour, minute, second] = e.target.value.split(":");
            const time = new Date();
            time.setHours(parseInt(hour), parseInt(minute), parseInt(second));
            setTime(time);
          }}
        />
      </div>
    </div>
  );
};
