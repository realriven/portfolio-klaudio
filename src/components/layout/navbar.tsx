
// Import Utilities
import { BookOpenText } from "lucide-react"

// Import Components
import { Button } from "@/components/ui/button"

export default function Navbar() {

    return (
        <div className="bg-gray-100">
            <div className="flex mx-auto max-w-7xl p-8">
                <div className="
                    flex-1
                    font-logo
                    text-3xl
                    font-bold
                ">
                    Klaudio Luku
                </div>
                <Button variant="outline">
                    <BookOpenText/> Guarda i miei lavori e progetti
                </Button>
            </div>
        </div>
    );
}