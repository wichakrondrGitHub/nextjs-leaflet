import { Metadata } from "next";
import { genPageMetadata } from "app/[locale]/seo";
import { createTranslation } from "../i18n/server";
import { LocaleTypes } from "../i18n/settings";
import MapDrawing from "@/components/map/MapDrawing";
import MapChoropleth from "@/components/map/MapChoropleth";
import MapRadar from "@/components/map/MapRadar";
import MapWithDraw from "@/components/map/MapDrawMultiPolygon";
import MapDrawMultiPolygon from "@/components/map/MapDrawMultiPolygon";
import MapWithGeoman from "@/components/map/MapWithGeoman";
import MapWrapper from "@/components/map/MapWraper";
import { DatePicker } from "antd";
import { MapResizable } from "./_components/MapResizable";

type MapPageProps = {
  params: { locale: LocaleTypes };
};

export async function generateMetadata({
  params: { locale },
}: MapPageProps): Promise<Metadata> {
  return genPageMetadata({
    title: "Map",
    params: { locale: locale },
  });
}

export default async function MapPage({ params: { locale } }: MapPageProps) {
  const { t } = await createTranslation(locale, "map");
  const center = [23.057428249787307, 44.99542713212659];

  // Filter posts based on the current locale
  return (
    <>
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {t("desc")}
      </h1>
      <p className="text-lg leading-7    text-gray-500 dark:text-gray-400">
        {t("description")}
      </p>

      <p className="text-lg leading-7   text-gray-500 dark:text-gray-400">
        MapDrawing
      </p>
      <>
        <MapResizable />
      </>

      {/* <MapDrawing /> */}
      {/* <MapChoropleth center={center} url={""} /> */}
      {/* <MapWrapper /> */}
      {/* <MapDrawMultiPolygon /> */}
      {/* <MapWithGeoman /> */}
      {/* <DatePicker /> */}
    </>
  );
}
