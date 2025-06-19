// Utility for merging class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export { cn };
