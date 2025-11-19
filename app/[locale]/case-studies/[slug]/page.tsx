import caseStudiesData from '@/data/case-studies.json'
import { CaseStudyDetailClient } from '@/components/case-study-detail-client'

export function generateStaticParams() {
  return caseStudiesData.caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <CaseStudyDetailClient slug={slug} />
}
