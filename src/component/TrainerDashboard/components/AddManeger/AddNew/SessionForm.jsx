import ThumbnailUpload from "./ThumbnailUpload";

export default function SessionForm({ formData, setFormData }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* LEFT */}
      <div className="space-y-4">
        <div>
          <label className="text-mb font-medium">Session Title</label>
          <input
            className="input"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>

        <div>
          <label className="text-mb font-medium">Session Description</label>
          <textarea
            className="input h-24"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <select
            className="input"
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option>Yoga</option>
            <option>Meditation</option>
          </select>

          <select
            className="input"
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
          >
            <option value="30">30 minutes</option>
            <option value="60">60 minutes</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <select
            className="input"
            onChange={(e) =>
              setFormData({ ...formData, level: e.target.value })
            }
          >
            <option>Beginner</option>
            <option>Intermediate</option>
          </select>

          <input
            placeholder="Add Link"
            className="input"
            onChange={(e) =>
              setFormData({ ...formData, link: e.target.value })
            }
          />
        </div>
      </div>

      {/* RIGHT */}
      <ThumbnailUpload formData={formData} setFormData={setFormData} />
    </div>
  );
}
