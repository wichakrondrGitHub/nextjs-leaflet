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
import PageTitle from "@/components/PageTitle";

type MapPageProps = {
  params: { locale: LocaleTypes };
};

export default async function MapPage({ params: { locale } }: MapPageProps) {
  const { t } = await createTranslation(locale, "map");
  const center = [23.057428249787307, 44.99542713212659];

  return (
    <>
      <PageTitle>{t("title")}</PageTitle>

      <MapDrawing />
      <MapChoropleth center={center} url={""} />
      <MapWrapper />
      <MapDrawMultiPolygon />
      <MapWithGeoman />
      <DatePicker />
    </>
  );
}
