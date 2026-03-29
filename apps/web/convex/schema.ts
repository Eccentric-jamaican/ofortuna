import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

const jurisdictionValidator = v.union(
  v.literal("jamaica"),
  v.literal("belize")
)

const userRoleValidator = v.union(
  v.literal("founder"),
  v.literal("lawyer"),
  v.literal("admin"),
  v.literal("collaborator")
)

const matterStatusValidator = v.union(
  v.literal("draft"),
  v.literal("collecting_information"),
  v.literal("missing_documents"),
  v.literal("ready_for_review"),
  v.literal("ready_for_filing"),
  v.literal("in_progress"),
  v.literal("waiting_on_founder"),
  v.literal("waiting_on_lawyer"),
  v.literal("submitted"),
  v.literal("completed"),
  v.literal("archived")
)

const participantAccessValidator = v.union(
  v.literal("owner"),
  v.literal("editor"),
  v.literal("commenter"),
  v.literal("viewer")
)

const documentDeleteStateValidator = v.union(
  v.literal("active"),
  v.literal("soft_deleted"),
  v.literal("restored")
)

const documentCategoryValidator = v.union(
  v.literal("formation"),
  v.literal("incorporation_certificate"),
  v.literal("governing_document"),
  v.literal("ownership_record"),
  v.literal("director_officer_record"),
  v.literal("compliance_filing"),
  v.literal("agreement"),
  v.literal("meeting_record"),
  v.literal("legal_correspondence"),
  v.literal("matter_support")
)

const verificationStatusValidator = v.union(
  v.literal("pending"),
  v.literal("under_review"),
  v.literal("verified"),
  v.literal("rejected"),
  v.literal("suspended")
)

const notificationKindValidator = v.union(
  v.literal("collaborator_invite"),
  v.literal("document_request"),
  v.literal("lawyer_access_granted"),
  v.literal("matter_status_changed"),
  v.literal("filing_readiness_changed"),
  v.literal("verification_result")
)

const filingStatusValidator = v.union(
  v.literal("draft"),
  v.literal("collecting_information"),
  v.literal("missing_documents"),
  v.literal("ready_for_filing"),
  v.literal("review_in_progress"),
  v.literal("prepared"),
  v.literal("needs_attention")
)

const filingTypeValidator = v.union(
  v.literal("business_name_registration"),
  v.literal("name_reservation"),
  v.literal("company_limited_by_shares_registration")
)

const aiAgentValidator = v.union(
  v.literal("intake_agent"),
  v.literal("clarification_agent"),
  v.literal("classification_agent"),
  v.literal("readiness_agent"),
  v.literal("document_agent"),
  v.literal("summarization_agent"),
  v.literal("compliance_agent"),
  v.literal("lawyer_handoff_agent"),
  v.literal("filing_prep_agent")
)

const aiSummaryKindValidator = v.union(
  v.literal("matter_summary"),
  v.literal("document_summary"),
  v.literal("readiness_summary"),
  v.literal("lawyer_handoff_brief"),
  v.literal("filing_prep_summary")
)

const aiExtractionKindValidator = v.union(
  v.literal("field_extraction"),
  v.literal("missing_information_detection"),
  v.literal("document_comparison"),
  v.literal("matter_packaging")
)

const citationSourceValidator = v.object({
  sourceKind: v.union(
    v.literal("document"),
    v.literal("field"),
    v.literal("workflow_rule"),
    v.literal("matter_note")
  ),
  sourceLabel: v.string(),
  excerpt: v.string(),
  confidence: v.union(v.literal("low"), v.literal("medium"), v.literal("high")),
})

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.string(),
    role: userRoleValidator,
    primaryJurisdiction: jurisdictionValidator,
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_role", ["role"]),

  workspaces: defineTable({
    ownerUserId: v.id("users"),
    name: v.string(),
    primaryJurisdiction: jurisdictionValidator,
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_owner", ["ownerUserId"]),

  matters: defineTable({
    workspaceId: v.id("workspaces"),
    ownerUserId: v.id("users"),
    title: v.string(),
    summary: v.string(),
    jurisdiction: jurisdictionValidator,
    status: matterStatusValidator,
    complexityScore: v.number(),
    urgencyScore: v.number(),
    confidenceScore: v.number(),
    documentCompletenessScore: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_workspace", ["workspaceId"])
    .index("by_owner", ["ownerUserId"])
    .index("by_status", ["status"]),

  matterParticipants: defineTable({
    matterId: v.id("matters"),
    userId: v.id("users"),
    role: userRoleValidator,
    accessLevel: participantAccessValidator,
    invitedByUserId: v.id("users"),
    createdAt: v.number(),
  })
    .index("by_matter", ["matterId"])
    .index("by_user", ["userId"]),

  documents: defineTable({
    matterId: v.id("matters"),
    ownerUserId: v.id("users"),
    category: documentCategoryValidator,
    name: v.string(),
    mimeType: v.string(),
    storageKey: v.string(),
    sizeBytes: v.number(),
    deleteState: documentDeleteStateValidator,
    latestVersionNumber: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
    deletedAt: v.optional(v.number()),
  })
    .index("by_matter", ["matterId"])
    .index("by_owner", ["ownerUserId"]),

  documentVersions: defineTable({
    documentId: v.id("documents"),
    versionNumber: v.number(),
    storageKey: v.string(),
    mimeType: v.string(),
    sizeBytes: v.number(),
    uploadedByUserId: v.id("users"),
    createdAt: v.number(),
  }).index("by_document", ["documentId"]),

  lawyerProfiles: defineTable({
    userId: v.id("users"),
    displayName: v.string(),
    firmName: v.string(),
    jurisdictions: v.array(jurisdictionValidator),
    practiceAreas: v.array(v.string()),
    consultCurrency: v.union(
      v.literal("JMD"),
      v.literal("BZD"),
      v.literal("USD")
    ),
    consultStartingFromMinor: v.number(),
    pricingModel: v.literal("consult_plus_quote"),
    availabilityNote: v.string(),
    verificationStatus: verificationStatusValidator,
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_verification_status", ["verificationStatus"]),

  lawyerVerifications: defineTable({
    lawyerUserId: v.id("users"),
    status: verificationStatusValidator,
    registryName: v.string(),
    registryBarNumber: v.string(),
    submittedAt: v.number(),
    reviewedAt: v.optional(v.number()),
    reviewedByUserId: v.optional(v.id("users")),
    notes: v.optional(v.string()),
  }).index("by_lawyer", ["lawyerUserId"]),

  lawyerMatches: defineTable({
    matterId: v.id("matters"),
    lawyerProfileId: v.id("lawyerProfiles"),
    fitScore: v.number(),
    fitSignalsJson: v.string(),
    createdAt: v.number(),
  })
    .index("by_matter", ["matterId"])
    .index("by_lawyer_profile", ["lawyerProfileId"]),

  filingReadinessRecords: defineTable({
    matterId: v.id("matters"),
    jurisdiction: jurisdictionValidator,
    filingType: filingTypeValidator,
    status: filingStatusValidator,
    missingFields: v.array(v.string()),
    missingDocuments: v.array(v.string()),
    notes: v.array(v.string()),
    lastEvaluatedAt: v.number(),
  }).index("by_matter", ["matterId"]),

  filingPackets: defineTable({
    matterId: v.id("matters"),
    readinessRecordId: v.id("filingReadinessRecords"),
    jurisdiction: jurisdictionValidator,
    filingType: filingTypeValidator,
    sourceDocumentIds: v.array(v.id("documents")),
    sourceVersionIds: v.array(v.id("documentVersions")),
    reviewSummary: v.string(),
    createdAt: v.number(),
  }).index("by_matter", ["matterId"]),

  notifications: defineTable({
    recipientUserId: v.id("users"),
    kind: notificationKindValidator,
    title: v.string(),
    body: v.string(),
    matterId: v.optional(v.id("matters")),
    createdAt: v.number(),
    readAt: v.optional(v.number()),
  })
    .index("by_recipient", ["recipientUserId"])
    .index("by_read_state", ["recipientUserId", "readAt"]),

  auditLogs: defineTable({
    actorType: v.union(v.literal("user"), v.literal("system"), v.literal("admin")),
    actorId: v.optional(v.id("users")),
    targetType: v.string(),
    targetId: v.string(),
    action: v.string(),
    previousStateJson: v.optional(v.string()),
    nextStateJson: v.optional(v.string()),
    result: v.union(v.literal("success"), v.literal("failure")),
    createdAt: v.number(),
  }).index("by_target", ["targetType", "targetId"]),

  aiSummaries: defineTable({
    matterId: v.id("matters"),
    kind: aiSummaryKindValidator,
    title: v.string(),
    body: v.string(),
    citations: v.array(citationSourceValidator),
    agent: aiAgentValidator,
    generatedAt: v.number(),
  }).index("by_matter", ["matterId"]),

  aiExtractions: defineTable({
    matterId: v.id("matters"),
    documentId: v.optional(v.id("documents")),
    kind: aiExtractionKindValidator,
    agent: aiAgentValidator,
    status: v.union(v.literal("pending"), v.literal("completed"), v.literal("failed")),
    payloadJson: v.string(),
    generatedAt: v.number(),
  }).index("by_matter", ["matterId"]),

  platformInvoices: defineTable({
    workspaceId: v.id("workspaces"),
    ownerUserId: v.id("users"),
    amountMinor: v.number(),
    currency: v.union(v.literal("JMD"), v.literal("BZD"), v.literal("USD")),
    status: v.union(v.literal("draft"), v.literal("issued"), v.literal("paid")),
    createdAt: v.number(),
  }).index("by_workspace", ["workspaceId"]),

  matterInvoices: defineTable({
    matterId: v.id("matters"),
    amountMinor: v.number(),
    currency: v.union(v.literal("JMD"), v.literal("BZD"), v.literal("USD")),
    status: v.union(v.literal("draft"), v.literal("issued"), v.literal("paid")),
    createdAt: v.number(),
  }).index("by_matter", ["matterId"]),

  professionalFeeReferences: defineTable({
    matterId: v.id("matters"),
    lawyerUserId: v.id("users"),
    quoteAmountMinor: v.optional(v.number()),
    currency: v.union(v.literal("JMD"), v.literal("BZD"), v.literal("USD")),
    status: v.union(
      v.literal("quoted"),
      v.literal("accepted"),
      v.literal("declined"),
      v.literal("paid_outside_platform")
    ),
    createdAt: v.number(),
  }).index("by_matter", ["matterId"]),
})
