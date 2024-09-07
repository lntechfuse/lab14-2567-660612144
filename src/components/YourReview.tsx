"use client";
import { Rating, Title, Textarea, Button} from "@mantine/core";
import { useState } from "react";

export default function YourReview(){
    const [value, setValue] = useState(0);
    const [text, setText] = useState('');

    return(
        <div>
            <Title fz="lg" mt="sm">Your rating</Title>
            <Rating value={value} onChange={setValue} size="xl"/>
            <Textarea 
                value={text} 
                onChange={(event) => setText(event.currentTarget.value)}
                fz="xs"
                radius="sm"
                label="Your review"
                placeholder="Do you enjoy Eating?"
                mt="sm"
                autosize
                minRows={3}
            ></Textarea>
            <Button variant="filled" color="orange" mt="sm" fz="sm">Submit Review</Button>
        </div>
    );
}