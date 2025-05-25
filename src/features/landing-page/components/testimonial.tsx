const featuredTestimonial = {
  body: "Jeg prøvede at lave en hjemmeside i Wix, men endte med at give op. Så prøvede jeg dette, og det er over alt forventning. Det er meget nemmere!",
  author: {
    name: "Henning Rasmussen",
    // imageUrl: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
  },
};

const testimonials = [
  [
    [
      {
        body: "Man bliver taget i hånden hele vejen igennem, som gør at hele processen er meget lettere.",
        author: {
          name: "Maria Kragerup",
          // imageUrl:
          //   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
    [
      {
        body: "Super nemt og brugervenligt værktøj. Så nemt at alle ikke-it kyndige kan være med. Praktisk talt idiotsikkert",
        author: {
          name: "Amalie Bredegaard",
          // imageUrl:
          //   "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
  [
    [
      {
        body: "Dette værktøj er fantastisk! Jeg havde aldrig lavet en hjemmeside før og har ingen it erfaring, men Spisesteder gjorde det nemt. En klar anbefaling herfra.",
        author: {
          name: "Mark Hansen",
          // imageUrl:
          //   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Testimonial = () => {
  return (
    <div className="relative isolate bg-background py-20 sm:pt-32 lg:pb-24">
      <div aria-hidden="true" className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[75rem] bg-gradient-to-tr from-[#FEF0E7] to-[#F9B686]"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[-22rem] aspect-[1313/771] w-[75rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#FDEBDD] to-[#FEF0E7] xl:ml-10"
        />
      </div>

      <div className="mx-auto max-w-content px-4 xl:px-0">
        <div className="mx-auto max-w-content px-8 sm:px-16">
          <h6 className="text-primary">Anmeldelser</h6>
          <h2 className="mt-2 text-balance">Hvad siger vores brugere om os?</h2>
        </div>
        <div className="max-w-content mx-auto mt-8 grid grid-cols-1 grid-rows-1 gap-8 sm:mt-16 sm:grid-cols-2 xl:mx-0 md:grid-flow-col md:grid-cols-4">
          <figure className="rounded-2xl bg-background-tint shadow-lg ring-1 ring-muted/25 sm:col-span-2 md:col-start-2 md:row-end-1">
            <blockquote className="p-6 pb-3 font-medium tracking-tight sm:p-8 sm:pb-4 text-secondary">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-y-4 border-t border-muted/50 px-6 py-4 pt-2 sm:flex-nowrap">
              {/* <img alt="" src={featuredTestimonial.author.imageUrl} className="size-10 flex-none rounded-full bg-gray-50" /> */}
              <div className="flex-auto">
                <div className="font-semibold">- {featuredTestimonial.author.name}</div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 md:contents md:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? "md:row-span-2"
                      : "md:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure key={testimonial.author.name} className="rounded-2xl bg-background-tint p-6 shadow-lg ring-1 ring-muted/25">
                      <blockquote>
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-2 flex items-center">
                        {/* <img alt="" src={testimonial.author.imageUrl} className="size-10 rounded-full bg-gray-50" /> */}
                        <div>
                          <h6>- {testimonial.author.name}</h6>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
