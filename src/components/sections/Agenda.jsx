import Fade from "react-reveal/Fade";

export const Agenda = ({ data }) => {
  return (
    <section>
      <div className="space-y-10">
        <div className="text-gray-700 text-lg">
          <div>
            <div>
              {data.map((agenda) => {
                const timeStart = agenda.time.split("-")[0];
                const timeEnd = agenda.time.split("-")[1];

                return (
                  <Fade>
                    <div className="flex border-b">
                      <div className="w-28 sm:w-52 border-r text-right p-8 pl-0">
                        <div className="font-semibold text-xl md:text-2xl">
                          {timeStart}
                        </div>
                        <div className="text-sm mt-1">{timeEnd}</div>
                        <div className="text-xs font-semibold mt-3 text-gray-500">
                          {agenda.timezone}
                        </div>
                      </div>
                      <div className="w-full p-8 pr-0 space-y-3">
                        <div className="text-lg md:text-2xl text-blue-700 font-semibold">
                          {agenda.title}
                        </div>
                        {agenda.topic && (
                          <div className="text-md md:text-xl text-gray-700">
                            {agenda.topic}
                          </div>
                        )}
                        <div className="text-md md:text-xl text-gray-700">
                          {agenda.speaker}
                        </div>
                        <div className="italic">{agenda.speakers}</div>

                        {agenda.url && (
                          <div className="text-md md:text-xl text-blue-700 url">
                            <a href={agenda.url} className="underline" target="_blank" rel="noreferrer">
							Register here
							</a>
                          </div>
                        )}
                      </div>
                    </div>
                  </Fade>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
