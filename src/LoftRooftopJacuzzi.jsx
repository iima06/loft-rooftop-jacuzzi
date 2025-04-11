
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useEffect } from "react";

export default function LoftRooftopJacuzzi() {
  useEffect(() => {
    document.title = "Loft Rooftop & Jacuzzi - Location à Cannes";
  }, []);

  return (
    <div className="p-6 space-y-10 max-w-5xl mx-auto">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">Loft Rooftop & Jacuzzi</h1>
        <p className="text-lg text-muted-foreground">Cannes centre - Proche Croisette</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="/images/terrasse-jacuzzi.jpg"
          alt="Terrasse avec jacuzzi"
          className="rounded-2xl shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">Un coin de paradis à Cannes ☀️🕶</h2>
          <p className="mb-4">
            Situé au dernier étage d’une maison typique Cannoise, ce loft est équipé d'une terrasse
            rooftop avec jacuzzi privé, transats et salon de jardin. Profitez du calme absolu tout
            en étant à quelques pas de la Croisette.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Capacité : jusqu’à 3 personnes</li>
            <li>Climatisation</li>
            <li>Wi-Fi haut débit</li>
            <li>Jacuzzi privé</li>
            <li>Terrasse plein soleil</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Galerie photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["IMG_2664.jpeg", "IMG_2669.jpeg", "IMG_2676.jpeg", "IMG_2678.jpeg", "IMG_6533.jpeg", "IMG_6550.jpeg", "IMG_8219.jpeg"].map((src) => (
            <img
              key={src}
              src={`/images/${src}`}
              alt="Photo du loft"
              className="rounded-xl shadow"
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Réservations</h2>
        <Card>
          <CardContent className="p-4 flex flex-col items-center text-center">
            <Calendar className="w-8 h-8 mb-2" />
            <p className="mb-4">Consultez les disponibilités sur Airbnb</p>
            <Button asChild>
              <a
                href="https://www.airbnb.fr/calendar/ical/52447592.ics?s=a54c2f493d7e3657467ad8412ffd4c1d"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le calendrier Airbnb
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Avis de nos voyageurs</h2>
        <Card>
          <CardContent className="p-4 space-y-3">
            <blockquote className="border-l-4 pl-4 italic">Un havre de paix, jacuzzi incroyable et emplacement parfait !</blockquote>
            <blockquote className="border-l-4 pl-4 italic">Le rooftop est encore plus beau en vrai. On reviendra !</blockquote>
            <blockquote className="border-l-4 pl-4 italic">Très calme, très propre, et proche de tout. Parfait pour un week-end à Cannes.</blockquote>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center pt-10 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Loft Rooftop & Jacuzzi - Cannes
      </footer>
    </div>
  );
}
