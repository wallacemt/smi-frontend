import React from "react";
import { FaUsers, FaCheck } from "react-icons/fa";

type EventCardProps = {
  title: string;
  date: string;
  description: string;
  interested: number;
  confirmed: number;
};

const EventCard: React.FC<EventCardProps> = ({ title, date, description, interested, confirmed }) => (
  <div className="bg-gray-700 rounded-lg p-4">
    <div className="flex items-center justify-between mb-2">
      <h4 className="text-white font-medium">{title}</h4>
      <span className="text-xs text-gray-400">{date}</span>
    </div>
    <p className="text-gray-300 text-sm mb-2">{description}</p>
    <div className="flex justify-between text-xs text-gray-400">
      <span>
        <FaUsers className="inline mr-1" />
        {interested} interessados
      </span>
      <span>
        <FaCheck className="inline mr-1" />
        {confirmed} confirmados
      </span>
    </div>
  </div>
);

export default EventCard;
