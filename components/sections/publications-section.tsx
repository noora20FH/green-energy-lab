import React from 'react'
import { Input } from '@/components/ui/input'
import { Combobox } from '@/components/ui/combobox'
import { Pagination } from '@/components/ui/pagination'
import { PublicationCard } from '@/components/shared/publication-card'
import { FileSearch } from 'lucide-react'

// IMPORT DATA DARI MOCK-DATA
import { publications, researchTopics } from '@/data/mock-data'

interface PublicationsSectionProps {
  searchQuery: string
  setSearchQuery: (value: string) => void
  selectedTopic: string
  setSelectedTopic: (value: string) => void
  currentPage: number
  setCurrentPage: (value: number) => void
}

export function PublicationsSection({
  searchQuery,
  setSearchQuery,
  selectedTopic,
  setSelectedTopic,
  currentPage,
  setCurrentPage
}: PublicationsSectionProps) {

  // --- FILTERING LOGIC ---
  const filteredPublications = publications.filter((pub) => {
    // 1. Filter by Search Query
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      pub.title.toLowerCase().includes(query) || 
      pub.summary.toLowerCase().includes(query) ||
      pub.authors.toLowerCase().includes(query);

    // 2. Filter by Topic (Dropdown)
    // Jika selectedTopic kosong (""), maka tampilkan semua
    const matchesTopic = selectedTopic 
      ? pub.researchTopic === selectedTopic 
      : true;

    return matchesSearch && matchesTopic;
  });

  return (
    <div className="space-y-8 py-12 px-24 ">
      {/* Header with Search/Filter */}
      <div className="py-8 border-b-2 border-green-100">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <h2 className="text-5xl font-bold bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 bg-clip-text text-transparent">
            Research Publications
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 items-center w-full md:w-auto">
            <Input
              placeholder="Search title, author, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-80 border-green-200 focus:border-green-500 focus:ring-green-500"
            />
            <Combobox
              options={researchTopics}
              value={selectedTopic}
              onChange={setSelectedTopic} // Pastikan Combobox Anda menerima prop onChange
              placeholder="Filter by topic"
              className="w-full sm:w-48"
            />
          </div>
        </div>
      </div>

      {/* Publications List - REAL TIME FILTERED */}
      <div className="space-y-6">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))
        ) : (
          // Tampilan jika tidak ada hasil pencarian
          <div className="text-center py-16 bg-zinc-50 rounded-lg border border-dashed border-zinc-200">
            <div className="flex justify-center mb-4">
              <FileSearch className="h-12 w-12 text-zinc-300" />
            </div>
            <h3 className="text-lg font-medium text-zinc-900">No publications found</h3>
            <p className="text-zinc-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedTopic(""); }}
              className="mt-4 text-sm text-green-600 font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Pagination (Opsional: Disembunyikan jika hasil filter sedikit) */}
      {filteredPublications.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={2} // Logika total pages bisa dibuat dinamis nanti
          onPageChange={setCurrentPage}
          className="justify-center pt-8"
        />
      )}
    </div>
  )
}