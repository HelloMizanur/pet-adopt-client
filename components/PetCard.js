"use client";
import { Card, CardBody, CardFooter, Button, Chip, Image } from "@heroui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function PetCard({ pet, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
    >
      <Card isHoverable className="h-full bg-content1/80 backdrop-blur">
        <CardBody className="p-0 overflow-hidden">
          <div className="relative">
            <Image
              alt={pet.name}
              src={pet.image}
              radius="none"
              className="object-cover w-full h-56"
              removeWrapper
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <Chip color="primary" variant="shadow" size="sm">{pet.species}</Chip>
              {pet.adopted ? (
                <Chip color="success" variant="shadow" size="sm">Adopted</Chip>
              ) : (
                <Chip color="warning" variant="shadow" size="sm">Available</Chip>
              )}
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between">
              <h3 className="font-bold text-lg">{pet.name}</h3>
              <span className="text-primary font-semibold">${pet.fee}</span>
            </div>
            <p className="text-sm text-foreground/70 mt-1">{pet.breed || "—"} · {pet.age || "Age N/A"} · {pet.gender}</p>
            {pet.location ? (
              <p className="text-xs text-foreground/60 mt-2 flex items-center gap-1"><MapPin size={12}/> {pet.location}</p>
            ) : null}
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            as={NextLink}
            href={`/pets/${pet._id}`}
            color="primary"
            variant="flat"
            fullWidth
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
