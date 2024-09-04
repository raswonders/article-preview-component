interface Props {
  open: boolean;
  children: React.ReactNode;
}

export function SharePopover({ open, children }: Props) {
  return (
    open && (
      <div className="absolute right-1/2 translate-x-1/2 -top-4 -translate-y-full px-8 py-4 hidden lg:flex lg:gap-4 lg:items-center bg-dark-gray rounded-[10px] shadow-[0px_10px_10px_rgba(201,213,225,0.50)]">
        <div className="absolute -bottom-[10px] right-1/2 translate-x-1/2 border-t-dark-gray border-t-[12px] border-x-[12px] border-x-transparent"></div>
        {children}
      </div>
    )
  );
}
