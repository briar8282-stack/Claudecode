'use client'

import { useState, useMemo } from 'react'
import { aucklandSchools, School } from '@/data/schools'
import { translations, Locale } from '@/locales/translations'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedDecile, setSelectedDecile] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'rating' | 'name' | 'academic'>('rating')
  const [locale, setLocale] = useState<Locale>('en')
  const [expandedSchools, setExpandedSchools] = useState<Set<number>>(new Set())

  const t = translations[locale]

  // Toggle school details expansion
  const toggleSchool = (id: number) => {
    const newExpanded = new Set(expandedSchools)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedSchools(newExpanded)
  }

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
      const searchLower = searchTerm.toLowerCase()
      const matchesSearch = school.name.toLowerCase().includes(searchLower) ||
                          school.nameCn.includes(searchTerm) ||
                          school.area.toLowerCase().includes(searchLower)
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
          return locale === 'zh' ? a.nameCn.localeCompare(b.nameCn) : a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedType, selectedDecile, sortBy, locale])

  const getRatingColor = (rating: number) => {
    if (rating >= 9.0) return 'text-green-600 bg-green-50'
    if (rating >= 8.0) return 'text-blue-600 bg-blue-50'
    if (rating >= 7.0) return 'text-yellow-600 bg-yellow-50'
    return 'text-orange-600 bg-orange-50'
  }

  const getRatingBadge = (rating: number) => {
    if (rating >= 9.0) return locale === 'zh' ? t.excellent : 'Excellent'
    if (rating >= 8.0) return locale === 'zh' ? t.veryGood : 'Very Good'
    if (rating >= 7.0) return locale === 'zh' ? t.good : 'Good'
    return locale === 'zh' ? t.average : 'Average'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                {t.title}
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                {t.subtitle}
              </p>
            </div>
            {/* Language Switcher */}
            <div className="flex gap-2">
              <button
                onClick={() => setLocale('en')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  locale === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLocale('zh')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  locale === 'zh'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.search}
              </label>
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* School Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.schoolType}
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">{t.allTypes}</option>
                {schoolTypes.filter(type => type !== 'all').map(type => (
                  <option key={type} value={type}>
                    {locale === 'zh' ? t.schoolTypes[type as keyof typeof t.schoolTypes] : type}
                  </option>
                ))}
              </select>
            </div>

            {/* Decile Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.decile}
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedDecile}
                onChange={(e) => setSelectedDecile(e.target.value)}
              >
                <option value="all">{t.allDeciles}</option>
                {deciles.filter(d => d !== 'all').map(decile => (
                  <option key={decile} value={decile}>
                    {locale === 'zh' ? `${t.decile} ${decile}` : `Decile ${decile}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.sortBy}
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
              >
                <option value="rating">{t.overallRating}</option>
                <option value="academic">{t.academicPerformance}</option>
                <option value="name">{t.schoolName}</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            {t.showing} {filteredSchools.length} {t.of} {aucklandSchools.length} {t.schools}
          </div>
        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSchools.map((school, index) => {
            const isExpanded = expandedSchools.has(school.id)
            return (
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
                          {locale === 'zh' ? school.nameCn : school.name}
                        </h2>
                        <p className="text-sm text-gray-600">
                          {school.area} • {locale === 'zh' ? t.schoolTypes[school.type] : school.type}
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
                      {locale === 'zh' ? `${t.decile} ${school.decile}` : `Decile ${school.decile}`}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm mb-4">
                    {locale === 'zh' ? school.descriptionCn : school.description}
                  </p>

                  {/* Tuition Fees */}
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-blue-900">💰 {t.tuitionFees}:</span>
                      <span className="text-sm font-bold text-blue-900">
                        {locale === 'zh' ? school.tuitionFeeCn : school.tuitionFee}
                      </span>
                    </div>
                  </div>

                  {/* Detailed Ratings */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{t.academicPerformance}</span>
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
                      <span className="text-sm text-gray-600">{t.facilities}</span>
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
                      <span className="text-sm text-gray-600">{t.extracurricular}</span>
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
                      <span className="text-sm text-gray-600">{t.teachingQuality}</span>
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

                  {/* Expandable section for Admission Rules and Tips */}
                  <button
                    onClick={() => toggleSchool(school.id)}
                    className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all mb-4"
                  >
                    {isExpanded ? '▲ ' : '▼ '}
                    {isExpanded ? (locale === 'zh' ? '收起详情' : 'Hide Details') : (locale === 'zh' ? '查看入学规则和提示' : 'View Admission Rules & Tips')}
                  </button>

                  {isExpanded && (
                    <div className="space-y-4 mb-4 p-4 bg-gray-50 rounded-lg">
                      {/* Admission Rules */}
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                          📋 {t.admissionRules}
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          {(locale === 'zh' ? school.admissionRulesCn : school.admissionRules).map((rule, idx) => (
                            <li key={idx} className="text-sm text-gray-700">{rule}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips */}
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                          💡 {t.tips}
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          {(locale === 'zh' ? school.tipsCn : school.tips).map((tip, idx) => (
                            <li key={idx} className="text-sm text-gray-700">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

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
                      {t.visitWebsite} →
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* No results message */}
        {filteredSchools.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg">
              {t.noResults}
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedType('all')
                setSelectedDecile('all')
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t.clearFilters}
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            {t.footer}
          </p>
        </div>
      </footer>
    </div>
  )
}
