type HeadingProps = {
  name: string;
  description?: string;
};

function Heading({ name, description }: HeadingProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-4xl">{name}</h2>

      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export { Heading };
