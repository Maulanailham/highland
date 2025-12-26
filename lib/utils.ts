import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LucideIcon, icons, HelpCircle } from "lucide-react";
 
// You need to import all icons from lucide-react, or at least the ones you intend to use.
// Using `* as LucidIcons` is the most straightforward way to get all of them
 
/**
 * A utility function to merge Tailwind CSS classes conditionally.
 * @param inputs The class values to merge.
 * @returns The merged class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
 
/**
 * Retrieves a Lucide icon component by its string name.
 * Note: The iconName must be in PascalCase and match a valid Lucide icon name.
 * e.g., "Heart", "ArrowRight", "CheckCircle"
 * * @param iconName The PascalCase name of the Lucide icon.
 * @returns The corresponding LucideIcon component, or a default (HelpCircle) if not found.
 */
export function getIconComponent(iconName: string): LucideIcon {
  // Use a type assertion to dynamically access the icon from the LucidIcons object.
  // This tells TypeScript to treat `iconName` as a key of the LucidIcons module.
  const IconComponent = icons[iconName as keyof typeof icons];

  if(!iconName){
    return HelpCircle;
  }
 
  // If the icon component is found, return it.
  if (IconComponent) {
    return IconComponent;
  }
 
  // If the icon is not found, log a warning and return a default icon.
  // This prevents the application from crashing if an invalid icon name is provided.
  console.warn(`Icon "${iconName}" not found. Falling back to default icon.`);
  return HelpCircle; // Default fallback icon
}