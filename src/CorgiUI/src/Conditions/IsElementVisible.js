export default function IsElementVisible(ref) {
  const element = ref.current;
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const isVisible = (rect.top <= window.innerHeight &&  rect.bottom >= 0);
  return isVisible;
}
