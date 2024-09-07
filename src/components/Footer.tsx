import { Text } from "@mantine/core";
import { footerProps } from "@lib/types";

export default function Footer({year, fullName, studentId}: footerProps) {
  return (
    <Text ta="center" my="sm" c="gray" size="sm">
      Copyright © {year} {fullName} {studentId}
    </Text>
  );
}