import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProfileCard() {
  return (
    <Card className="p-4 flex flex-col items-center gap-2">
      <div className="w-24 h-24 bg-gray-300 rounded-full" />
      <h2 className="font-semibold text-center">Name</h2>
      <p className="text-sm text-center text-muted-foreground">
        Professional Title and Field
      </p>

      <div className="flex gap-1 flex-wrap justify-center text-xs text-muted-foreground">
        <span className="bg-gray-100 px-2 py-1 rounded-full">AI/ML</span>
        <span className="bg-gray-100 px-2 py-1 rounded-full">Data Science</span>
        <span className="bg-gray-100 px-2 py-1 rounded-full">IoT</span>
      </div>

      <div className="flex gap-2 pt-2">
        <Button size="sm" variant="outline">
          View Profile
        </Button>
        <Button size="sm">Connect</Button>
      </div>
    </Card>
  );
}
export default ProfileCard;
