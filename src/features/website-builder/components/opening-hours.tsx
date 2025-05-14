import { getLabelForDay, useWebsiteInfoStore } from "@/stores/website-info-store";

export const OpeningHours = () => {
  const { openingHours } = useWebsiteInfoStore();

  return (
    <section>
      <h3 className="text-center">Åbningstider</h3>

      {openingHours.monday === openingHours.tuesday &&
      openingHours.tuesday === openingHours.wednesday &&
      openingHours.wednesday === openingHours.thursday &&
      openingHours.thursday === openingHours.friday ? (
        <>
          <div className="flex flex-row gap-2 sm:gap-3 justify-center items-end">
            <h4>Hverdage</h4>
            <p>{openingHours.monday}</p>
          </div>
          <div className="flex flex-row gap-2 sm:gap-3 justify-center items-end">
            <h4>Lørdag</h4>
            <p>{openingHours.saturday}</p>
          </div>
          <div className="flex flex-row gap-2 sm:gap-3 justify-center items-end">
            <h4>Søndag</h4>
            <p>{openingHours.sunday}</p>
          </div>
        </>
      ) : (
        Object.entries(openingHours).map(([day, hours]) => (
          <div key={day} className="flex flex-row gap-2 sm:gap-3 justify-center items-end">
            <h4>{getLabelForDay(day)}</h4>
            <p>{hours}</p>
          </div>
        ))
      )}

      {/* {Object.entries(openingHours).map(([day, hours]) => (
        <div key={day} className="flex flex-row gap-2 sm:gap-3 justify-center items-end">
          <h4>{getLabelForDay(day)}</h4>
          <p>{hours}</p>
        </div>
      ))} */}
    </section>
  );
};
