import { Box } from "@chakra-ui/react";

//box with max width of 1920px
export default function BoxMaxWidth({
  children,
  className,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Box maxWidth={1920} className={`mx-auto ${className}`}>
      {children}
    </Box>
  );
}
