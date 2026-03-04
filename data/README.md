# Data Files

Structured analysis datasets from the HTI-5 public comment analysis. All derived from public comments submitted to [regulations.gov](https://www.regulations.gov/document/HHS-ONC-2025-0005-0001/comment).

## Files

### `comments.json`

Array of 298 comment objects. Each entry:

| Field                | Type           | Description                                                                                                                                                                                                                   |
| -------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                 | string         | regulations.gov comment ID (e.g., `HHS-ONC-2025-0005-0149`)                                                                                                                                                                   |
| `name`               | string         | Commenter name                                                                                                                                                                                                                |
| `organization`       | string         | Organization affiliation                                                                                                                                                                                                      |
| `organization_type`  | string         | Category: `individual_clinician`, `health_it_company`, `professional_association`, `advocacy_group`, `health_system`, `government_agency`, `academic_research`, `payer`, `ehr_vendor`, `patient_advocate`, `other`, `unknown` |
| `position`           | string         | Stance on deregulation: `strongly_oppose_deregulation`, `oppose_deregulation`, `neutral_mixed`, `support_deregulation`, `strongly_support_deregulation`, `unclear`                                                            |
| `themes`             | string[]       | Policy themes present in comment (see themes.json for definitions)                                                                                                                                                            |
| `sentiment`          | number         | Sentiment score from −3 (strongly negative) to +3 (strongly positive)                                                                                                                                                         |
| `full_text`          | string         | Complete comment text                                                                                                                                                                                                         |
| `has_attachment`     | boolean        | Whether the comment included attachments                                                                                                                                                                                      |
| `coordination_group` | string \| null | Campaign ID if part of organized advocacy                                                                                                                                                                                     |

### `themes.json`

Array of 11 policy themes identified in the comments.

| Field                | Type     | Description                                              |
| -------------------- | -------- | -------------------------------------------------------- |
| `id`                 | string   | Theme identifier (e.g., `patient_safety`)                |
| `name`               | string   | Display name                                             |
| `description`        | string   | Summary of the theme                                     |
| `comment_count`      | number   | Number of comments mentioning this theme                 |
| `safety_importance`  | number   | Ranking by patient safety relevance (1 = most important) |
| `position_breakdown` | object   | Count of positions among comments with this theme        |
| `examples`           | string[] | Representative comment IDs                               |

### `stats.json`

Aggregate statistics for the full dataset.

| Field                       | Type   | Description                             |
| --------------------------- | ------ | --------------------------------------- |
| `total_comments`            | number | Total unique comments (298)             |
| `position_distribution`     | object | Count per position category             |
| `org_type_distribution`     | object | Count per organization type             |
| `top_themes`                | object | Theme mention counts                    |
| `avg_sentiment`             | number | Average sentiment score (−0.73)         |
| `comments_with_attachments` | number | Comments that included file attachments |

### `coordination_groups.json`

Organized advocacy campaigns detected through pattern analysis.

| Field          | Type     | Description                      |
| -------------- | -------- | -------------------------------- |
| `id`           | string   | Campaign identifier              |
| `label`        | string   | Campaign name                    |
| `description`  | string   | How the campaign was identified  |
| `theme`        | string   | Primary policy theme             |
| `stance`       | string   | Position of coordinated comments |
| `member_count` | number   | Number of comments in campaign   |
| `comment_ids`  | string[] | List of comment IDs              |

### `duplicates.json`

7 duplicate submissions removed from the analysis dataset.

| Field        | Type   | Description                        |
| ------------ | ------ | ---------------------------------- |
| `kept_id`    | string | Comment ID retained in the dataset |
| `removed_id` | string | Duplicate comment ID removed       |
| `name`       | string | Commenter name                     |
| `reason`     | string | How the duplicate was identified   |

## Usage

These files can be used independently of the website. Load them in any language:

```python
import json
with open("data/comments.json") as f:
    comments = json.load(f)
```

```javascript
import comments from "./data/comments.json";
```

For the raw, unprocessed comment text and metadata, see [`raw-data/`](../raw-data/).
