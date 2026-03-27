export const USER_ROLES = [
  "founder",
  "lawyer",
  "admin",
  "collaborator",
] as const

export type UserRole = (typeof USER_ROLES)[number]

export const SUPPORTED_JURISDICTIONS = ["jamaica", "belize"] as const

export type SupportedJurisdiction = (typeof SUPPORTED_JURISDICTIONS)[number]

export const MATTER_STATUSES = [
  "draft",
  "collecting_information",
  "missing_documents",
  "ready_for_review",
  "ready_for_filing",
  "in_progress",
  "waiting_on_founder",
  "waiting_on_lawyer",
  "submitted",
  "completed",
  "archived",
] as const

export type MatterStatus = (typeof MATTER_STATUSES)[number]

export const PARTICIPANT_ACCESS_LEVELS = [
  "owner",
  "editor",
  "commenter",
  "viewer",
] as const

export type ParticipantAccessLevel = (typeof PARTICIPANT_ACCESS_LEVELS)[number]

export const DOCUMENT_DELETE_STATES = [
  "active",
  "soft_deleted",
  "restored",
] as const

export type DocumentDeleteState = (typeof DOCUMENT_DELETE_STATES)[number]

export const DOCUMENT_CATEGORIES = [
  "formation",
  "incorporation_certificate",
  "governing_document",
  "ownership_record",
  "director_officer_record",
  "compliance_filing",
  "agreement",
  "meeting_record",
  "legal_correspondence",
  "matter_support",
] as const

export type DocumentCategory = (typeof DOCUMENT_CATEGORIES)[number]

export const LAWYER_VERIFICATION_STATUSES = [
  "pending",
  "under_review",
  "verified",
  "rejected",
  "suspended",
] as const

export type LawyerVerificationStatus =
  (typeof LAWYER_VERIFICATION_STATUSES)[number]

export const NOTIFICATION_KINDS = [
  "collaborator_invite",
  "document_request",
  "lawyer_access_granted",
  "matter_status_changed",
  "filing_readiness_changed",
  "verification_result",
] as const

export type NotificationKind = (typeof NOTIFICATION_KINDS)[number]

export const AI_AGENT_KINDS = [
  "intake_agent",
  "clarification_agent",
  "classification_agent",
  "readiness_agent",
  "document_agent",
  "summarization_agent",
  "compliance_agent",
  "lawyer_handoff_agent",
  "filing_prep_agent",
] as const

export type AiAgentKind = (typeof AI_AGENT_KINDS)[number]

export const AI_SUMMARY_KINDS = [
  "matter_summary",
  "document_summary",
  "readiness_summary",
  "lawyer_handoff_brief",
  "filing_prep_summary",
] as const

export type AiSummaryKind = (typeof AI_SUMMARY_KINDS)[number]

export const AI_EXTRACTION_KINDS = [
  "field_extraction",
  "missing_information_detection",
  "document_comparison",
  "matter_packaging",
] as const

export type AiExtractionKind = (typeof AI_EXTRACTION_KINDS)[number]

export const FILING_ASSISTANT_STATUSES = [
  "draft",
  "collecting_information",
  "missing_documents",
  "ready_for_filing",
  "review_in_progress",
  "prepared",
  "needs_attention",
] as const

export type FilingAssistantStatus =
  (typeof FILING_ASSISTANT_STATUSES)[number]

export const FILING_TYPES = [
  "business_name_registration",
  "name_reservation",
  "company_limited_by_shares_registration",
] as const

export type FilingType = (typeof FILING_TYPES)[number]

export const PROFESSIONAL_FEE_STATUSES = [
  "quoted",
  "accepted",
  "declined",
  "paid_outside_platform",
] as const

export type ProfessionalFeeStatus = (typeof PROFESSIONAL_FEE_STATUSES)[number]

export type AuditActorType = "user" | "system" | "admin"

export type CitationSourceKind =
  | "document"
  | "field"
  | "workflow_rule"
  | "matter_note"

export type ConfidenceLevel = "low" | "medium" | "high"

export type PricingModel = "consult_plus_quote"

export type CurrencyCode = "JMD" | "BZD" | "USD"

export type FitSignal = {
  label: string
  score: number
}

export type MatterSummary = {
  id: string
  workspaceId: string
  ownerUserId: string
  title: string
  summary: string
  jurisdiction: SupportedJurisdiction
  status: MatterStatus
  complexityScore: number
  urgencyScore: number
  confidenceScore: number
  documentCompletenessScore: number
  createdAt: string
  updatedAt: string
}

export type MatterParticipantAccess = {
  id: string
  matterId: string
  userId: string
  role: UserRole
  accessLevel: ParticipantAccessLevel
  invitedByUserId: string
  createdAt: string
}

export type DocumentMetadata = {
  id: string
  matterId: string
  ownerUserId: string
  category: DocumentCategory
  name: string
  mimeType: string
  storageKey: string
  sizeBytes: number
  deleteState: DocumentDeleteState
  latestVersionNumber: number
  createdAt: string
  updatedAt: string
  deletedAt?: string
}

export type DocumentVersionRecord = {
  id: string
  documentId: string
  versionNumber: number
  storageKey: string
  mimeType: string
  sizeBytes: number
  uploadedByUserId: string
  createdAt: string
}

export type LawyerConsultPricing = {
  currency: CurrencyCode
  startingFromMinor: number
  model: PricingModel
}

export type LawyerVerificationRecord = {
  id: string
  lawyerUserId: string
  status: LawyerVerificationStatus
  registryName: string
  registryBarNumber: string
  submittedAt: string
  reviewedAt?: string
  reviewedByUserId?: string
  notes?: string
}

export type LawyerProfile = {
  id: string
  userId: string
  displayName: string
  firmName: string
  jurisdictions: readonly SupportedJurisdiction[]
  practiceAreas: readonly string[]
  consultPricing: LawyerConsultPricing
  availabilityNote: string
  verificationStatus: LawyerVerificationStatus
  fitSignals?: readonly FitSignal[]
}

export type LawyerMatchSearchResult = {
  lawyerProfileId: string
  displayName: string
  firmName: string
  jurisdictions: readonly SupportedJurisdiction[]
  practiceAreas: readonly string[]
  consultPricing: LawyerConsultPricing
  fitScore: number
  fitSignals: readonly FitSignal[]
  verificationStatus: LawyerVerificationStatus
}

export type AiCitationSource = {
  sourceKind: CitationSourceKind
  sourceLabel: string
  excerpt: string
  confidence: ConfidenceLevel
}

export type AiSummaryRecord = {
  id: string
  matterId: string
  kind: AiSummaryKind
  title: string
  body: string
  citations: readonly AiCitationSource[]
  agent: AiAgentKind
  generatedAt: string
}

export type AiExtractionRecord = {
  id: string
  matterId: string
  documentId?: string
  kind: AiExtractionKind
  agent: AiAgentKind
  status: "pending" | "completed" | "failed"
  payloadJson: string
  generatedAt: string
}

export type FilingReadinessRecord = {
  id: string
  matterId: string
  jurisdiction: SupportedJurisdiction
  filingType: FilingType
  status: FilingAssistantStatus
  missingFields: readonly string[]
  missingDocuments: readonly string[]
  notes: readonly string[]
  lastEvaluatedAt: string
}

export type FilingPacketRecord = {
  id: string
  matterId: string
  readinessRecordId: string
  jurisdiction: SupportedJurisdiction
  filingType: FilingType
  sourceDocumentIds: readonly string[]
  sourceVersionIds: readonly string[]
  reviewSummary: string
  createdAt: string
}

export type NotificationItem = {
  id: string
  recipientUserId: string
  kind: NotificationKind
  title: string
  body: string
  matterId?: string
  createdAt: string
  readAt?: string
}

export type AuditLogRecord = {
  id: string
  actorType: AuditActorType
  actorId?: string
  targetType: string
  targetId: string
  action: string
  previousStateJson?: string
  nextStateJson?: string
  result: "success" | "failure"
  createdAt: string
}

export type PlatformInvoiceReference = {
  id: string
  workspaceId: string
  ownerUserId: string
  amountMinor: number
  currency: CurrencyCode
  status: "draft" | "issued" | "paid"
}

export type MatterInvoiceReference = {
  id: string
  matterId: string
  amountMinor: number
  currency: CurrencyCode
  status: "draft" | "issued" | "paid"
}

export type ProfessionalFeeReference = {
  id: string
  matterId: string
  lawyerUserId: string
  quoteAmountMinor?: number
  currency: CurrencyCode
  status: ProfessionalFeeStatus
}
