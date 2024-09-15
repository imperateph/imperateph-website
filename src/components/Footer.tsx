import BoxMaxWidth from "./containers/BoxMaxWidth";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={className}>
      <BoxMaxWidth>
        <p className="text-center text-gray-500">
          Copyright @ 2024 | Imperate Realty. All Rights Reserved.
        </p>
      </BoxMaxWidth>
    </footer>
  );
}
