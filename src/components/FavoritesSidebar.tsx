
import { ScrollArea } from "./ui/scroll-area";
import { HistorySlide } from "./HistorySlide";

export interface FavoriteItem {
  id: string;
  prompt: string;
  timestamp: string;
}

interface FavoritesSidebarProps {
  favorites: FavoriteItem[];
  onSelectFavorite: (prompt: string) => void;
}

export const FavoritesSidebar = ({ favorites, onSelectFavorite }: FavoritesSidebarProps) => {
  return (
    <aside className="w-64 bg-[#F6F6F7] p-4 border-r h-screen">
      <h2 className="text-lg font-semibold mb-4">Favorites</h2>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="space-y-2">
          {favorites.map((item) => (
            <HistorySlide
              key={item.id}
              prompt={item.prompt}
              timestamp={item.timestamp}
              onClick={() => onSelectFavorite(item.prompt)}
            />
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};
