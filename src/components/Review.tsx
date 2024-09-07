"use client";
import { commentProps } from "@lib/types";
import { Rating, Group, Text, Divider } from "@mantine/core";

export default function Review({ name, rating, comment }: commentProps){
    return(
        <div>
            <Divider my="sm" />
            <Group justify="center">
                <Text fz="lg" fw="bold">{name}</Text>
                <Rating value={rating} />
            </Group>

            <Text ta="center" c="gray" size="sm">
                {comment}
            </Text>
        </div>
    );
}