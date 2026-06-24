import * as React from "react"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { Select as SelectPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        // Base — igual que .contact-input
        "w-full px-4 py-4 border border-[#E5E7E6] rounded-xl bg-[#fdfcfb]",
        "font-manrope text-[14px] leading-[22px] text-stone-800",
        "flex items-center justify-between gap-2 cursor-pointer",
        "outline-none transition-all duration-200",
        // Focus
        "focus:border-[#A67C52] focus:shadow-[0_0_0_3px_rgba(166,124,82,0.10)]",
        // Placeholder (cuando no hay valor seleccionado)
        "data-[placeholder]:text-stone-400",
        // Disabled
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon size={16} className="text-[#A67C52] shrink-0" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        className={cn(
          // Contenedor del dropdown
          "relative z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden",
          "bg-white border border-[#E5E7E6] rounded-xl shadow-lg",
          "mt-1",
          // Animaciones
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        "px-3 py-2 font-manrope font-semibold text-[10px] uppercase tracking-[0.12em] text-stone-400",
        className
      )}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        // Base
        "relative flex items-center gap-3 px-4 py-3 mx-1 rounded-lg",
        "font-manrope text-[14px] text-stone-700 leading-[22px]",
        "cursor-pointer select-none outline-none transition-colors duration-150",
        // Hover / focus
        "hover:bg-[#f5f0eb] hover:text-stone-900",
        "focus:bg-[#f5f0eb] focus:text-stone-900",
        // Estado seleccionado
        "data-[state=checked]:bg-[#f5f0eb] data-[state=checked]:text-[#A67C52] data-[state=checked]:font-semibold",
        // Disabled
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      {/* Checkmark cuando está seleccionado */}
      <span className="ml-auto">
        <SelectPrimitive.ItemIndicator>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 7L5.5 10L11.5 4"
              stroke="#A67C52"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("my-1 mx-3 h-px bg-[#E5E7E6]", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-stone-400",
        className
      )}
      {...props}
    >
      <ChevronUpIcon size={14} />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-stone-400",
        className
      )}
      {...props}
    >
      <ChevronDownIcon size={14} />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
