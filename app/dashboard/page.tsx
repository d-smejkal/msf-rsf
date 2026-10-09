export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <header className="top">
        <div className="header">
          <div className="container-wide">
            <div className="header-div">
              <div className="flex items-baseline gap-3">
                <img className="site-logo w-54" alt="MSF logo" src="/msf-rsf/logo.svg" />
                <span className="font-bold italic text-xs">present</span>
                <div className="w-54">
                  <img className="site-logo" alt="RSF logo" src="/msf-rsf/logo_rsf.gif" />
                </div>
                {/* <span className="italic text-gray-200 text-7xl">RSF</span> */}
              </div>

              <div className="flex items-center gap-4">
                <img src="/msf-rsf/search.gif" alt="Search" width={18} />
                <span className="text-sm text-gray-600 pl-6">
                  David Smejkal
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 font-semibold">
                  DS
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="min-h-[calc(100vh-4rem)] mt-26 w-72 bg-white p-5">
          <div className="breadcrumbs__content">
            <img src="/msf-rsf/home.svg" alt="Go Home" />
            <span className="text-lg text-gray-300">
              {'>'}
            </span>
            <span className="text-sm text-gray-400">
              Dashboard
            </span>
          </div>
          <nav className="mt-6 line">
            <div className="px-4 py-4 text-red-500 font-semibold border-t border-b border-red-100">
              Dashboard
            </div>

            <div className="navigate arrow">
              Meetings
            </div>

            <div className="navigate arrow">
              Agenda
            </div>

            <div className="navigate arrow">
              Actions
            </div>

            <div className="navigate arrow">
              Transcripts
            </div>

            <div className="navigate arrow">
              Decisions
            </div>

            <div className="navigate arrow">
              Documents
            </div>

            <div className="navigate mt-12 border-t border-t-3 border-gray-300">
              Settings
            </div>

            {/* <div className="rounded-md px-4 py-3 text-gray-600 hover:bg-gray-100">
              Solitaire
            </div> */}
          </nav>
        </aside>

        {/* Main content */}
        <section className="flex-1 mt-26 py-4 px-8 bg-white">
          {/* Page heading */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Good morning, David. You look really great today!
              </h2>
              <p className="mt-1 text-lg text-gray-500">
                Welcome back in your promised land of meetings.
              </p>
            </div>
            <button>+ New Meeting</button>
          </div>

          {/* Statistics */}
          <div className="mb-4 grid grid-cols-4 gap-5">
            <div className="rounded-xl bg-gray-50 p-5 shadow-sm">
              <p className="text-sm text-gray-500">Upcoming meetings</p>
              <p className="mt-2 text-3xl font-semibold">6</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5 shadow-sm">
              <p className="text-sm text-gray-500">Pending agenda approvals</p>
              <p className="mt-2 text-3xl font-semibold">4</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5 shadow-sm">
              <p className="text-sm text-gray-500">Open action tasks</p>
              <p className="mt-2 text-3xl font-semibold">12</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5 shadow-sm">
              <p className="text-sm text-gray-500">Recent decisions</p>
              <p className="mt-2 text-3xl font-semibold">8</p>
            </div>
          </div>

          {/* Main dashboard grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Upcoming meetings */}
            <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  Upcoming meetings
                </h3>
                <span className="button">
                  View all
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-md border bg-white p-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg">
                        IT Management Meeting
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Today • 11:00 – 11:30
                      </p>
                    </div>
                    <div className="flex rounded-lg items-center justify-center bg-green-100 w-22 px-3 py-1 text-xs font-medium text-green-700">
                      Ready
                    </div>
                  </div>
                </div>

                <div className="rounded-md border bg-white p-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg">
                        Effective planning training
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Today • 23:30-23:35
                      </p>
                    </div>
                    <span className="flex rounded-lg items-center justify-center bg-yellow-100 w-22 px-3 py-1 text-xs text-center font-medium text-yellow-700">
                      Agenda pending
                    </span>
                  </div>
                </div>

                <div className="rounded-md border bg-white p-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg">
                        Board Meeting
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Friday • 10:00 – 22:00
                      </p>
                    </div>
                    <span className="flex rounded-lg items-center justify-center bg-purple-100 w-22 px-3 py-1 text-xs text-center font-medium text-purple-700">
                      Confidential
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending approvals */}
            <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  Pending agenda approvals
                </h3>
                <span className="button">
                  View all
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-md border bg-white p-4">
                  <div>
                    <p className="text-lg">
                      Introduction to cybersecurity
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      IT Management Meeting
                    </p>
                  </div>
                  <button>Review</button>
                </div>

                <div className="flex items-center justify-between rounded-md border bg-white p-4">
                  <div>
                    <p className="text-lg">
                      Budget 2027
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Management Meeting
                    </p>
                  </div>
                  <button>Review</button>
                </div>

                <div className="flex items-center justify-between rounded-md border bg-white p-4">
                  <div>
                    <p className="text-lg">
                      Tax optimization
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Management Meeting
                    </p>
                  </div>
                  <button>Review</button>
                </div>
              </div>
            </div>

            {/* Open actions */}
            <div className="rounded-xl bg-white p-6 border border-gray-100 shadow-md">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  Open actions
                </h3>
                <span className="button">View all</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between border-b pb-3">
                  <div>
                    <p className="text-lg">
                      Double the Diazepam suplly flotilas
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Ales Bachtik • Due Oct 18
                    </p>
                  </div>
                  <span className="text-sm text-red-600">
                    Due soon
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <div>
                    <p className="text-lg">
                      Reduce staff by 56%
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Vera Nunukova • Due Dec 24
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    Open
                  </span>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-lg">
                      Turn the calendar page to a new year in the hallway
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Cristos Christou • Due Jan 01
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    Open
                  </span>
                </div>
              </div>
            </div>

            {/* Recent decisions */}
            <div className="rounded-xl bg-white p-6 border border-gray-100 shadow-md">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  Recent decisions
                </h3>

                <span className="button">
                  Search decisions
                </span>
              </div>

              <div className="space-y-4">
                <div className="border-b pb-3">
                  <p className="text-lg">
                    David Smejkal to win the Employee of the year award
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Council of the Wise meeting • Oct 04
                  </p>
                </div>

                <div className="border-b pb-2">
                  <p className="text-lg">
                    All employees to get orange Labubu on Dec 22
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Annual Chinese useless things surplus donation • Oct 01
                  </p>
                </div>

                <div>
                  <p className="text-lg">
                    Squid game added to team building animation programs  
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    HR Management Meeting • Sep 29
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}