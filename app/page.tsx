'use client'

import { useState, useMemo } from 'react'
import { aucklandSchools, School } from '@/data/schools'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedDecile, setSelectedDecile] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'rating' | 'name' | 'academic'>('rating')

  // Get unique school types and deciles for filters
  const schoolTypes = useMemo(() => {
    return ['all', ...Array.from(new Set(aucklandSchools.map(s => s.type)))]
  }, [])

  const deciles = useMemo(() => {
    return ['all', ...Array.from(new Set(aucklandSchools.map(s => s.decile))).sort((a, b) => b - a)]
  }, [])

  // Filter and sort schools
  const filteredSchools = useMemo(() => {
    let filtered = aucklandSchools.filter(school => {
      const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          school.area.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = selectedType === 'all' || school.type === selectedType
      const matchesDecile = selectedDecile === 'all' || school.decile === Number(selectedDecile)

      return matchesSearch && matchesType && matchesDecile
    })

    // Sort schools
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'academic':
          return b.academicPerformance - a.academicPerformance
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedType, selectedDecile, sortBy])

  const getRatingColor = (rating: number) => {
    if (rating >= 9.0) return 'text-green-600 bg-green-50'
    if (rating >= 8.0) return 'text-blue-600 bg-blue-50'
    if (rating >= 7.0) return 'text-yellow-600 bg-yellow-50'
    return 'text-orange-600 bg-orange-50'
  }

  const getRatingBadge = (rating: number) => {
    if (rating >= 9.0) return 'Excellent'
    if (rating >= 8.0) return 'Very Good'
    if (rating >= 7.0) return 'Good'
    return 'Average'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Auckland Schools Ranking
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Comprehensive 10-point rating system for Auckland schools
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="School name or area..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* School Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                School Type
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {schoolTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>

            {/* Decile Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Decile
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedDecile}
                onChange={(e) => setSelectedDecile(e.target.value)}
              >
                {deciles.map(decile => (
                  <option key={decile} value={decile}>
                    {decile === 'all' ? 'All Deciles' : `Decile ${decile}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
              >
                <option value="rating">Overall Rating</option>
                <option value="academic">Academic Performance</option>
                <option value="name">School Name</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredSchools.length} of {aucklandSchools.length} schools
          </div>
        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSchools.map((school, index) => (
            <div
              key={school.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                {/* Header with ranking number and rating */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {school.name}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {school.area} • {school.type}
                      </p>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-full font-bold text-2xl ${getRatingColor(school.rating)}`}>
                    {school.rating.toFixed(1)}
                  </div>
                </div>

                {/* Rating badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getRatingColor(school.rating)}`}>
                    {getRatingBadge(school.rating)}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">
                    Decile {school.decile}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {school.description}
                </p>

                {/* Detailed Ratings */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Academic Performance</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${school.academicPerformance * 10}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-900 w-8">
                        {school.academicPerformance.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Facilities</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${school.facilities * 10}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-900 w-8">
                        {school.facilities.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Extracurricular</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${school.extracurricular * 10}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-900 w-8">
                        {school.extracurricular.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Teaching Quality</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-orange-600 h-2 rounded-full"
                          style={{ width: `${school.teachingQuality * 10}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-900 w-8">
                        {school.teachingQuality.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <p className="text-xs text-gray-500 mb-2">
                  📍 {school.address}
                </p>

                {/* Website link */}
                {school.website && (
                  <a
                    href={school.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredSchools.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg">
              No schools found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedType('all')
                setSelectedDecile('all')
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            Auckland Schools Ranking © 2024. Ratings are indicative and based on multiple factors including academic performance, facilities, extracurricular activities, and teaching quality.
          </p>
        </div>
      </footer>
    </div>
  )
}
