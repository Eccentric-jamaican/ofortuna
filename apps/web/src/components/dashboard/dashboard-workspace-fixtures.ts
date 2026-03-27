import type {
  AiSummaryRecord,
  AuditLogRecord,
  DocumentMetadata,
  FilingPacketRecord,
  FilingReadinessRecord,
  LawyerMatchSearchResult,
  LawyerProfile,
  LawyerVerificationRecord,
  MatterParticipantAccess,
  MatterSummary,
  NotificationItem,
} from "@ofortuna/shared-types"

export const founderMatters: readonly MatterSummary[] = [
  {
    id: "matter_founder_formation",
    workspaceId: "workspace_founder_primary",
    ownerUserId: "user_founder_addis",
    title: "Olive Bay Foods incorporation",
    summary:
      "Two-founder food manufacturing company with uneven ownership, draft governance terms, and filing prep underway.",
    jurisdiction: "jamaica",
    status: "ready_for_review",
    complexityScore: 74,
    urgencyScore: 61,
    confidenceScore: 87,
    documentCompletenessScore: 68,
    createdAt: "2026-03-18T10:15:00.000Z",
    updatedAt: "2026-03-23T11:20:00.000Z",
  },
  {
    id: "matter_founder_belize",
    workspaceId: "workspace_founder_primary",
    ownerUserId: "user_founder_addis",
    title: "Belize export entity setup",
    summary:
      "Belize market-entry matter with draft company profile, missing address evidence, and counsel handoff planned.",
    jurisdiction: "belize",
    status: "missing_documents",
    complexityScore: 66,
    urgencyScore: 54,
    confidenceScore: 71,
    documentCompletenessScore: 42,
    createdAt: "2026-03-19T08:00:00.000Z",
    updatedAt: "2026-03-23T09:10:00.000Z",
  },
] as const

export const founderParticipants: readonly MatterParticipantAccess[] = [
  {
    id: "participant_owner_primary",
    matterId: "matter_founder_formation",
    userId: "user_founder_addis",
    role: "founder",
    accessLevel: "owner",
    invitedByUserId: "user_founder_addis",
    createdAt: "2026-03-18T10:15:00.000Z",
  },
  {
    id: "participant_collaborator_ops",
    matterId: "matter_founder_formation",
    userId: "user_collaborator_finance",
    role: "collaborator",
    accessLevel: "commenter",
    invitedByUserId: "user_founder_addis",
    createdAt: "2026-03-22T13:05:00.000Z",
  },
] as const

export const founderDocuments: readonly DocumentMetadata[] = [
  {
    id: "doc_articles_draft",
    matterId: "matter_founder_formation",
    ownerUserId: "user_founder_addis",
    category: "governing_document",
    name: "Draft articles of incorporation.pdf",
    mimeType: "application/pdf",
    storageKey: "matters/matter_founder_formation/articles-v2.pdf",
    sizeBytes: 184320,
    deleteState: "active",
    latestVersionNumber: 2,
    createdAt: "2026-03-18T11:40:00.000Z",
    updatedAt: "2026-03-22T09:30:00.000Z",
  },
  {
    id: "doc_founder_ids",
    matterId: "matter_founder_formation",
    ownerUserId: "user_founder_addis",
    category: "formation",
    name: "Founder identity bundle.zip",
    mimeType: "application/zip",
    storageKey: "matters/matter_founder_formation/founder-ids.zip",
    sizeBytes: 423981,
    deleteState: "active",
    latestVersionNumber: 1,
    createdAt: "2026-03-18T12:10:00.000Z",
    updatedAt: "2026-03-18T12:10:00.000Z",
  },
  {
    id: "doc_belize_address",
    matterId: "matter_founder_belize",
    ownerUserId: "user_founder_addis",
    category: "matter_support",
    name: "Belize address letter.pdf",
    mimeType: "application/pdf",
    storageKey: "matters/matter_founder_belize/address-letter.pdf",
    sizeBytes: 92811,
    deleteState: "soft_deleted",
    latestVersionNumber: 1,
    createdAt: "2026-03-19T09:20:00.000Z",
    updatedAt: "2026-03-23T08:15:00.000Z",
    deletedAt: "2026-03-23T08:15:00.000Z",
  },
] as const

export const founderLawyerMatches: readonly LawyerMatchSearchResult[] = [
  {
    lawyerProfileId: "lawyer_profile_hall",
    displayName: "Nadia Hall",
    firmName: "Hall Corporate Advisory",
    jurisdictions: ["jamaica", "belize"],
    practiceAreas: ["Business formation", "Corporate governance"],
    consultPricing: {
      currency: "JMD",
      startingFromMinor: 1800000,
      model: "consult_plus_quote",
    },
    fitScore: 92,
    fitSignals: [
      { label: "Multi-founder structuring", score: 96 },
      { label: "Cross-border support", score: 88 },
    ],
    verificationStatus: "verified",
  },
  {
    lawyerProfileId: "lawyer_profile_lawrence",
    displayName: "Marcus Lawrence",
    firmName: "Lawrence & Co.",
    jurisdictions: ["jamaica"],
    practiceAreas: ["Company formation", "Filings"],
    consultPricing: {
      currency: "JMD",
      startingFromMinor: 1200000,
      model: "consult_plus_quote",
    },
    fitScore: 84,
    fitSignals: [
      { label: "COJ filings", score: 95 },
      { label: "Founder readiness", score: 78 },
    ],
    verificationStatus: "verified",
  },
] as const

export const founderNotifications: readonly NotificationItem[] = [
  {
    id: "notification_readiness",
    recipientUserId: "user_founder_addis",
    kind: "filing_readiness_changed",
    title: "Formation matter is ready for legal review",
    body: "The Jamaica company matter now has enough context for counsel review.",
    matterId: "matter_founder_formation",
    createdAt: "2026-03-23T11:20:00.000Z",
  },
  {
    id: "notification_collaborator",
    recipientUserId: "user_founder_addis",
    kind: "collaborator_invite",
    title: "Finance collaborator accepted access",
    body: "Your collaborator can now comment on the incorporation matter.",
    matterId: "matter_founder_formation",
    createdAt: "2026-03-22T13:15:00.000Z",
    readAt: "2026-03-22T13:18:00.000Z",
  },
] as const

export const founderReadiness: readonly FilingReadinessRecord[] = [
  {
    id: "readiness_jamaica_primary",
    matterId: "matter_founder_formation",
    jurisdiction: "jamaica",
    filingType: "company_limited_by_shares_registration",
    status: "review_in_progress",
    missingFields: [],
    missingDocuments: ["Director consent form"],
    notes: [
      "Articles intake is complete.",
      "Reserved name has been confirmed.",
    ],
    lastEvaluatedAt: "2026-03-23T11:00:00.000Z",
  },
  {
    id: "readiness_belize_primary",
    matterId: "matter_founder_belize",
    jurisdiction: "belize",
    filingType: "name_reservation",
    status: "missing_documents",
    missingFields: ["Registered office contact"],
    missingDocuments: ["Proof of Belize address"],
    notes: ["Belize packet is blocked until address evidence is restored."],
    lastEvaluatedAt: "2026-03-23T08:15:00.000Z",
  },
] as const

export const founderFilingPackets: readonly FilingPacketRecord[] = [
  {
    id: "filing_packet_jamaica_primary",
    matterId: "matter_founder_formation",
    readinessRecordId: "readiness_jamaica_primary",
    jurisdiction: "jamaica",
    filingType: "company_limited_by_shares_registration",
    sourceDocumentIds: ["doc_articles_draft", "doc_founder_ids"],
    sourceVersionIds: ["docver_articles_v2", "docver_ids_v1"],
    reviewSummary:
      "Packet assembled for counsel review with source versions locked for filing preparation.",
    createdAt: "2026-03-23T11:10:00.000Z",
  },
] as const

export const founderAiSummaries: readonly AiSummaryRecord[] = [
  {
    id: "ai_summary_founder_matter",
    matterId: "matter_founder_formation",
    kind: "matter_summary",
    title: "Current matter summary",
    body:
      "The founders want a Jamaica company limited by shares with uneven ownership and stronger governance controls before they open for operations.",
    citations: [
      {
        sourceKind: "document",
        sourceLabel: "Draft articles of incorporation.pdf",
        excerpt: "Share ownership and director powers are still being finalized.",
        confidence: "high",
      },
      {
        sourceKind: "matter_note",
        sourceLabel: "Founder intake transcript",
        excerpt: "Two founders with different capital contributions and different roles.",
        confidence: "high",
      },
    ],
    agent: "summarization_agent",
    generatedAt: "2026-03-23T10:58:00.000Z",
  },
  {
    id: "ai_summary_lawyer_brief",
    matterId: "matter_founder_formation",
    kind: "lawyer_handoff_brief",
    title: "Counsel handoff brief",
    body:
      "Counsel should review ownership rights, director removal thresholds, and founder approval mechanics before filing.",
    citations: [
      {
        sourceKind: "field",
        sourceLabel: "Founder structure",
        excerpt: "Uneven ownership and founder control preferences are explicitly stated in intake.",
        confidence: "medium",
      },
    ],
    agent: "lawyer_handoff_agent",
    generatedAt: "2026-03-23T11:12:00.000Z",
  },
] as const

export const lawyerProfiles: readonly LawyerProfile[] = [
  {
    id: "lawyer_profile_hall",
    userId: "user_lawyer_hall",
    displayName: "Nadia Hall",
    firmName: "Hall Corporate Advisory",
    jurisdictions: ["jamaica", "belize"],
    practiceAreas: ["Business formation", "Corporate governance"],
    consultPricing: {
      currency: "JMD",
      startingFromMinor: 1800000,
      model: "consult_plus_quote",
    },
    availabilityNote: "Available for founder consultations within 48 hours.",
    verificationStatus: "verified",
    fitSignals: [
      { label: "Formation strategy", score: 92 },
      { label: "Belize support", score: 81 },
    ],
  },
  {
    id: "lawyer_profile_lawrence",
    userId: "user_lawyer_lawrence",
    displayName: "Marcus Lawrence",
    firmName: "Lawrence & Co.",
    jurisdictions: ["jamaica"],
    practiceAreas: ["Company formation", "Filings"],
    consultPricing: {
      currency: "JMD",
      startingFromMinor: 1200000,
      model: "consult_plus_quote",
    },
    availabilityNote: "Best suited for Jamaica filing-heavy matters.",
    verificationStatus: "verified",
  },
] as const

export const primaryFounderMatter: MatterSummary = founderMatters[0]!
export const primaryMatterSummary: AiSummaryRecord = founderAiSummaries[0]!
export const primaryLawyerBrief: AiSummaryRecord = founderAiSummaries[1]!
export const primaryFilingPacket: FilingPacketRecord = founderFilingPackets[0]!
export const primaryLawyerProfile: LawyerProfile = lawyerProfiles[0]!

export const lawyerInboxMatters: readonly MatterSummary[] = [
  primaryFounderMatter,
  {
    id: "matter_lawyer_due_diligence",
    workspaceId: "workspace_lawyer_hall",
    ownerUserId: "user_founder_diaspora",
    title: "Belize holding entity review",
    summary:
      "Founder needs Belize structuring review before reserving a company name.",
    jurisdiction: "belize",
    status: "ready_for_review",
    complexityScore: 78,
    urgencyScore: 46,
    confidenceScore: 76,
    documentCompletenessScore: 58,
    createdAt: "2026-03-20T14:05:00.000Z",
    updatedAt: "2026-03-23T09:55:00.000Z",
  },
] as const

export const lawyerNotifications: readonly NotificationItem[] = [
  {
    id: "notification_lawyer_access",
    recipientUserId: "user_lawyer_hall",
    kind: "lawyer_access_granted",
    title: "A founder shared a matter with you",
    body: "Olive Bay Foods incorporation is ready for your review.",
    matterId: "matter_founder_formation",
    createdAt: "2026-03-23T11:14:00.000Z",
  },
] as const

export const verificationQueue: readonly LawyerVerificationRecord[] = [
  {
    id: "verification_belize_fernandez",
    lawyerUserId: "user_lawyer_fernandez",
    status: "under_review",
    registryName: "Belize Bar Association",
    registryBarNumber: "BZ-4421",
    submittedAt: "2026-03-22T16:20:00.000Z",
    notes: "Registry match found, waiting on final certificate upload review.",
  },
  {
    id: "verification_jamaica_ellis",
    lawyerUserId: "user_lawyer_ellis",
    status: "pending",
    registryName: "General Legal Council Jamaica",
    registryBarNumber: "JM-18872",
    submittedAt: "2026-03-23T09:02:00.000Z",
  },
] as const

export const adminNotifications: readonly NotificationItem[] = [
  {
    id: "notification_admin_verification",
    recipientUserId: "user_admin_ops",
    kind: "verification_result",
    title: "Two lawyer verifications need review",
    body: "Registry-assisted checks are ready for admin review.",
    createdAt: "2026-03-23T09:15:00.000Z",
  },
] as const

export const auditTrail: readonly AuditLogRecord[] = [
  {
    id: "audit_permission_change",
    actorType: "user",
    actorId: "user_founder_addis",
    targetType: "matter_participant",
    targetId: "participant_collaborator_ops",
    action: "granted_comment_access",
    previousStateJson: "{\"accessLevel\":\"viewer\"}",
    nextStateJson: "{\"accessLevel\":\"commenter\"}",
    result: "success",
    createdAt: "2026-03-22T13:05:00.000Z",
  },
  {
    id: "audit_filing_packet",
    actorType: "system",
    targetType: "filing_packet",
    targetId: "filing_packet_jamaica_primary",
    action: "assembled_packet",
    nextStateJson:
      "{\"matterId\":\"matter_founder_formation\",\"status\":\"prepared\"}",
    result: "success",
    createdAt: "2026-03-23T11:10:00.000Z",
  },
] as const
