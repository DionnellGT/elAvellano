import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useIsMobile } from "../hooks/useIsMobile";


type VideoSectionProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const VideoSection = ({ open, setOpen }: VideoSectionProps) => {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Modal con video */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
            style={{ maxWidth: isMobile ? "90vw" : "60vw", width: isMobile ? "90vw" : "60vw" }} 
            className=" p-0 bg-black border-none overflow-hidden"
        >
            <div className="relative w-full aspect-video">
            {open && (
                <iframe
                src="https://www.youtube.com/embed/A0bt5sFncUI?autoplay=1"
                title="El Avellano"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                />
            )}
            </div>
        </DialogContent>
      </Dialog>
    </>
  );
};