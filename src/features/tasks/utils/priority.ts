import type { Priority } from "../../../types/task";

export const getPriorityClass = (
  priority: Priority,
  styles: Record<string, string>
): string => {
  switch (priority.toLowerCase()) {
    case "high":
      return styles.highPriority;
    case "medium":
      return styles.mediumPriority;
    case "low":
      return styles.lowPriority;
    default:
      return styles.defaultPriority;
    }
  };